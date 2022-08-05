import chalk from 'chalk'
import fs from 'fs'

fs.readFile('./src/files/text1.md', 'utf-8', (error, text) => console.log(text))