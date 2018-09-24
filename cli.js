#!/usr/bin/env node
'use strict'
const { extname, resolve } = require('path')
const fs = require('fs')
const { promisify } = require('util')
const meow = require('meow')
const outlinStroke = require('svg-outline-stroke')
const mkdirp = require('mkdirp')

const readFile = promisify(fs.readFile)
const readdir = promisify(fs.readdir)
const writeFile = promisify(fs.writeFile)
const stat = promisify(fs.lstat)
const mkdir = promisify(mkdirp)

const cli = meow(
  `
	Usage
		$ outline-stroke <input>
		
	Options
		--output, -o Specify output file/folder	

	Examples
	  $ outline-stroke icon.svg
	  <svg>…</svg
`,
  {
    flags: {
      output: {
        type: 'string',
        alias: 'o',
      },
    },
  }
)

const isSvg = filename => extname(filename) === '.svg'

const outlineSvg = async input => {
  const svg = await readFile(input)
  return await outlinStroke(svg)
}

const doOutlineStroke = async (input, { output }) => {
  const s = await stat(input)
  if (s.isDirectory()) {
    const files = await readdir(input)
    const svgs = files.filter(isSvg)
    if (output) {
      await mkdir(output)
    }
    for (const svg of svgs) {
      const outlined = await outlineSvg(resolve(input, svg))
      if (output) {
        await writeFile(resolve(output, svg), outlined)
      } else {
        console.log(outlined)
      }
    }
    return
  }

  if (s.isFile() && isSvg(input)) {
    const outlined = await outlineSvg(input)
    if (output) {
      await writeFile(`${output.replace('.svg', '')}.svg`, outlined)
    } else {
      console.log(outlined)
    }
  }
}

doOutlineStroke(cli.input[0], cli.flags)
