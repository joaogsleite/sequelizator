const fs = require('fs')
const path = require('path')
const ejs = require('ejs')

function configFilePath(folderPath, configFile) {
  return path.join(__dirname, '..', '..', folderPath, configFile)
}

function render(template, data, destFolder, fileName) {
  return new Promise((resolve, reject) => {
    const options = {}
    const templatePath = path.join(__dirname, '..', 'templates', template)
    ejs.renderFile(templatePath, data, options, (error, result) => {
      if (error) {
        reject(error)
      } else {
        const destFile = path.join(destFolder, fileName)
        fs.writeFile(destFile, result, (error) => {
          if (error) {
            reject(error)
          } else {
            resolve()
          }
        })
      }
    })
  })
  
}

module.exports = {
  configFilePath,
  render,
}
