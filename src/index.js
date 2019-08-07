#!/usr/bin/env node

const { readConfigFile, render } = require('./utils/fs')
const { normalizeFields, normalizeRelations } = require('./utils/configFile')

const TYPES = require('./constants/types.js')

const FOLDER_PATH = process.argv[2]

function handleTable({ tableName, modelName, fields, relations, otherTables }) {
  const modelImports = ''
  const schema = ''
  const associations = ''
  const toJsonMethod = ''
  fields = normalizeFields(fields)
  relations = normalizeRelations(relations, {tableName, modelName, otherTables})
  const data = { tableName, TYPES, fields, relations, modelName, modelImports, schema, associations, toJsonMethod }
  render('Model.js', data, FOLDER_PATH, `${modelName}.js`)
  render('Model.d.ts', data, FOLDER_PATH, `${modelName}.d.ts`)
}

async function main() {
  const config = await readConfigFile(FOLDER_PATH)
  if (Array.isArray(config)) {
    config.forEach((table, index, tables) => {
      const { table: tableName, model: modelName, fields, relations } = table
      const otherTables = tables.filter((table) => {
        const { table: otherTableName } = table
        return otherTableName !== tableName
      })
      handleTable({ tableName, modelName, fields, relations, otherTables })
    })
  } else {
    console.error('Invalid config format')
  }
}

main()
