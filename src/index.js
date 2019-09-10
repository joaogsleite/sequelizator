#!/usr/bin/env node

const { configFilePath, render } = require('./utils/fs')
const { normalizeRelations, normalizeSequelizeColumn } = require('./utils/configFile')

const TYPES = require('./constants/types.js')

const FOLDER_PATH = process.argv[2]
const CONFIG_FILE = process.argv[3] || 'config.js'

function handleTable({ tableName, modelName, columns, relations, otherTables }) {
  relations = normalizeRelations(relations, {tableName, modelName, otherTables})
  const data = { 
    tableName, TYPES, columns, relations, modelName,
    normalizeSequelizeColumn,
  }
  render('Model.js', data, FOLDER_PATH, `${modelName}.js`)
  render('Model.d.ts', data, FOLDER_PATH, `${modelName}.d.ts`)
}

async function main() {
  const config = require(configFilePath(FOLDER_PATH, CONFIG_FILE))
  if (Array.isArray(config)) {
    config.forEach((table, index, tables) => {
      const { table: tableName, model: modelName, columns, relations } = table
      const otherTables = tables.filter((table) => {
        const { table: otherTableName } = table
        return otherTableName !== tableName
      })
      handleTable({ tableName, modelName, columns, relations, otherTables })
    })
  } else {
    console.error('Invalid config format')
  }
}

main()
