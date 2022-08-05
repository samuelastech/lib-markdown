import chalk from 'chalk'
import fs from 'fs'

fs.readFile('./package.json', 'utf-8', (_, text) => console.log(text))