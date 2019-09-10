
function normalizeSequelizeColumn(column) {
  return {
    type: column.type,
    allowNull: column.allowNull,
  }
} 

function normalizeRelations (relations, { tableName, modelName, otherTables }) {
  otherTables.forEach((table = {}) => {
    (table.relations || []).forEach((relation) => {
      if (relation.model === modelName) {
        if (!relations.find((r) => r.model === table.model)) {
          relations.push({
            model: table.model,
            type: relation.type === 'n:n' 
              ? 'n:n' 
              : relation.type === 'n:1' 
                ? '1:n'
                : 'n:1'
          })
        }
      }
    })
  })
  relations.forEach((relation) => {
    if (relation.type === 'n:n') {
      const models = [
        relation.model.toLowerCase(), 
        modelName.toLowerCase(),
      ].sort((a, b) => a.localeCompare(b))
      const otherTable = otherTables.find(({model}) => model === relation.model)
      relation.table = relation.table || models.join('')
      relation.field = relation.field || modelName.toLowerCase() + 'Id'
      relation.otherField = relation.otherField || 
        otherTable.relations.find(r => r.model === modelName).field ||
        otherTable.model.toLowerCase() + 'Id'

    } else if (relation.type === '1:n') {
      relation.table = relation.table || otherTables.find(({model}) => model === relation.model).table
      relation.field = relation.field || modelName.toLowerCase() + 'Id'
    } else if (relation.type === 'n:1') {
      relation.table = relation.table || tableName
      relation.field = relation.field || relation.model.toLowerCase() + 'Id'
    }
  })
  return relations
}

module.exports = {
  normalizeRelations,
  normalizeSequelizeColumn,
}
