const fs = require('fs')
const path = require('path')

const dataPath = path.join(__dirname, '../data') 

const createFile = (fileName) => {
  fs.writeFileSync(dataPath, '', 'utf-8')
}

const appendToFile = (fileName, str) => {
  fs.appendFileSync(path.join(dataPath, str), 'utf-8')
}

const writeToFile = (fileName, str) => {
  fs.writeFileSync(path.join(dataPath, fileName), str, 'utf-8')
}

exports.createFile = createFile
exports.appendToFile = appendToFile
exports.writeToFile = writeToFile