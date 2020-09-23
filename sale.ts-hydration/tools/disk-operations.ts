import * as path from 'path'
import * as fs from 'fs'

const dataPath = path.join(__dirname, '../data') 

export const createFile = (fileName) => {
  fs.writeFileSync(dataPath, '', 'utf-8')
}

export const appendToFile = (fileName, str) => {
  fs.appendFileSync(path.join(dataPath, str), 'utf-8')
}

export const writeToFile = (fileName, str) => {
  fs.writeFileSync(path.join(dataPath, fileName), str, 'utf-8')
}

export const readFileSync = (fileName) => fs.readFileSync(path.join(dataPath, fileName), 'utf-8')