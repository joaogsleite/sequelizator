import Sequelize, { Model } from 'sequelize'
<% relations.forEach(function({ model }){ %>
import <%= model %> from './<%= model %>'<% -%>
<% }) %>

export default class <%= modelName %> extends Model {
  static init (sequelize) {
    const schema = {
      <% columns.forEach(function(column){ -%>
<%= column.name %>: <%- JSON.stringify(normalizeSequelizeColumn(column)) %>,
      <% }); %>
    }
    const options = { tableName: '<%= tableName %>', sequelize }
    super.init(schema, options)
  }
  static getById (id) {
    const where = { id }
    return <%= modelName %>.findOne({ where })
  }
  static associate () {<%
    relations.forEach(function({ model, type, table, field, otherField }){
    if (type === 'n:n') { %>
    <%= modelName %>.belongsToMany(<%= model %>, {
      through: '<%= table %>',
      foreignKey: '<%= field %>',
      otherKey: '<%= otherField %>',
    })<% -%>
    <% } else if (type === '1:n') { %>
    <%= modelName %>.hasMany(<%= model %>, {
      sourceKey: 'id',
      foreignKey: '<%= field %>',
      as: '<%= table %>',
    })<% -%>
    <% } -%>
    <% }) %>
  }
  
  toJSON() {
    return {
      id: this.id,
      <% columns.forEach(function(column){ -%>
<%= column.name %>: this.<%= column.name %>,
      <% }); %>
    }
  }
}
