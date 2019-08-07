
# Sequelize generator

[![Donate on patreon](https://img.shields.io/badge/donate-patreon-F96854.svg)](https://patreon.com/jwebcoder)
[![Build Status][travis-badge]][travis]
[![codecov][codecov-badge]][codecov]
![node][node]
[![npm version][npm-badge]][npm]
[![dependencies Status][dependencies-badge]][dependencies]
[![devDependencies Status][dev-dependencies-badge]][dev-dependencies]
[![PRs Welcome][prs-badge]][prs]
[![GitHub][license-badge]][license]

CLI tool to generate sequelize models based on simple JSON config

## Install

* inside your project 

```
npm install --save-dev sequelizator
```

* globally

```
npm install -g sequelizator
```

## Using

```
sequelizator <folder>
```

* Sequelize models will be created inside `<folder>`
* `<folder>` must contains a `config.json` file like this `example/config.json`
* You can create a script in your project's package.json to run this way: `npm run sequelize-generator`

```
...
"scripts": {
  ...
  "sequelizator": "sequelizator ./src/models/",
  ...
},
...
```

## Example `config.json`

```json
[
  {
    "table": "users",
    "model": "User",
    "fields": {
      "name": "String",
      "email": "String",
      "password": "String"
    },
    "relations": [
      { "type": "1:n", "model": "Post" }
    ]
  },
  {
    "table": "posts",
    "model": "Post",
    "fields": {
      "title": "String"
    },
    "relations": [
      { "type": "n:n", "model": "Tag" }
    ]
  },
  {
    "table": "tags",
    "model": "Tag",
    "fields": {
      "name": "String"
    },
    "relations": [
      { "type": "n:n", "model": "Post" }
    ]
  }
]
```


[travis-badge]: https://travis-ci.com/joaogsleite/sequelizator.svg?branch=master
[travis]: https://travis-ci.com/joaogsleite/sequelizator

[codecov-badge]: https://codecov.io/gh/joaogsleite/sequelizator/branch/master/graph/badge.svg
[codecov]: https://codecov.io/gh/joaogsleite/sequelizator

[node]: https://img.shields.io/node/v/sequelizator.svg

[npm-badge]: https://badge.fury.io/js/sequelizator.svg
[npm]: https://badge.fury.io/js/sequelizator

[dependencies-badge]: https://david-dm.org/joaogsleite/sequelizator/status.svg
[dependencies]: https://david-dm.org/joaogsleite/sequelizator

[dev-dependencies-badge]: https://david-dm.org/joaogsleite/sequelizator/dev-status.svg
[dev-dependencies]: https://david-dm.org/joaogsleite/sequelizator?type=dev

[prs-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg
[prs]: http://makeapullrequest.com

[license-badge]: https://img.shields.io/github/license/joaogsleite/sequelizator.svg
[license]: https://github.com/joaogsleite/sequelizator/blob/master/LICENSE
