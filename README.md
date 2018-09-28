<p align="center">
  <img alt="Outline Stroke" title="Outline Stroke" src="/logo.svg" width="450">
</p>

<p align="center">
  CLI version of <a href="https://github.com/elrumordelaluz/outline-stroke">
    outline-stroke
  </a>
</p>

## Install

```zsh
npm i -g outline-stroke-cli
```

## Usage

```zsh
outline-stroke logo.svg -o logo-outlined
```

## API

outline-stroke input [flags]

#### input

Path to file or folder with `.svg` files

#### flags

##### output

```
--output, -o Specify output file/folder
```

If input is single file output will be the string with `.svg` extension added, otherwise will be a folder.

If no specified, the output will be logged into `console`.

## Demo

<p align="center">
  <img alt="Outline Stroke Demo" title="Outline Stroke Demo" src="https://cdn.rawgit.com/elrumordelaluz/outline-stroke-cli/773ead51/demo.gif" width="450">
</p>

## Related

[svg-outline-stroke](https://github.com/elrumordelaluz/outline-stroke) Main Package

[micro-outline-stroke](https://github.com/elrumordelaluz/micro-outline-stroke)
Microservice with a public [endpoint](https://micro-outline-stroke.now.sh/)
