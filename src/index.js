import chalk from 'chalk'
import fs from 'fs'

fs.promises.readFile('./src/files/text1.md', 'utf-8')
    .then(text => console.log(text))
    .catch(error => { throw new Error(chalk.red(error)) })