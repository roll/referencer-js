# referencer-js

[![Travis](https://img.shields.io/travis/roll/referencer-js/master.svg)](https://travis-ci.org/roll/referencer-js)
[![Coveralls](http://img.shields.io/coveralls/roll/referencer-js.svg?branch=master)](https://coveralls.io/r/roll/referencer-js?branch=master)
[![NPM](https://img.shields.io/npm/v/referencer.svg)](https://www.npmjs.com/package/referencer)
[![Github](https://img.shields.io/badge/github-master-brightgreen)](https://github.com/roll/referencer-js)

Generate a markdown reference from your public API docstrings and add it to your readme.

## Features

- Uses `jsdoct-to-markdown` under the hood

## Getting Started

The package uses semantic versioning. It means that major versions  could include breaking changes.

```bash
$ npm install referencer
```

## Documentation

```bash
referencer package README.md --in-place
```

## API Reference

### cli
Command-line interface

```
Usage: cli [options] <package> <document>

Options:
 --in-place                             Output as JSON
 --package-pattern <package-pattern>    Package pattern (default: "const { (\w+) } = require\('\.\/(\w+)'\)")
 --document-section <document-section>  Document section (default: "## API Reference")
 -h, --help                             output usage information
```


### generateDocument()
Generate document


### generateReference()
Generate reference


## Contributing

```bash
nvm install 12
nvm use 12
npm install
npm test
```

## Changelog

### v0.x

- Initial version
