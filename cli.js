#!/usr/bin/env node
'use strict'
const meow = require('meow')
const outlinStroke = require('svg-outline-stroke')
const fs = require('fs')
const { promisify } = require('util')
const readFileAsync = promisify(fs.readFile)

const cli = meow(
  `
	Usage
	  $ outline-stroke <input>

	Examples
	  $ outline-stroke icon.svg
	  <svg>…</svg
`
)

readFileAsync(cli.input[0]).then(data =>
  outlinStroke(data, cli.flags).then(r => console.log(r))
)
