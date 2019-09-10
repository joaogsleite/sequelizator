
# Sequelize generator

![node][node]
[![npm version][npm-badge]][npm]
[![dependencies Status][dependencies-badge]][dependencies]
[![devDependencies Status][dev-dependencies-badge]][dev-dependencies]
[![PRs Welcome][prs-badge]][prs]
[![GitHub][license-badge]][license]

CLI tool to generate sequelize models based on simple JS config

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
* `<folder>` must contains a `config.js` file like this `example/config.js`
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

## Example `config.js`

```js
[
  {
    "table": "users",
    "model": "User",
    "columns": [
      {
        "name": "name",
        "type": "STRING",
        "allowNull": false,
      },
      {
        "name": "email",
        "type": "STRING",
      },
      {
        "name": "password",
        "type": "STRING",
      },
    ],
    "relations": [
      { "type": "1:n", "model": "Post" }
    ]
  },
  {
    "table": "posts",
    "model": "Post",
    "columns": [
      {
        "name": "title",
        "type": "STRING",
      },
      {
        "name": "published",
        "type": "BOOLEAN",
        "defaultValue": true,
        "allowNull": false,
      },
    ],
    "relations": [
      { "type": "n:n", "model": "Tag" }
    ]
  },
  {
    "table": "tags",
    "model": "Tag",
    "columns": [
      {
        "name": "name",
        "type": "STRING",
      },
      {
        "name": "order",
        "type": "INTEGER",
        "defaultValue": 1,
        "allowNull": false,
      },
    ],
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
