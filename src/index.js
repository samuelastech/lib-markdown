import chalk from 'chalk'
import fs from 'fs'

fs.readFile('./src/files/text1.md', 'utf-8', (error, text) => {
    if(error) throw new Error(chalk.red(error))
    console.log(text)
})