import chalk from 'chalk'
import fs from 'fs'

async function readFile(path){
    try{
        const text = await fs.promises.readFile(path, 'utf-8')
        console.log(text)
    }catch(error){
        throw new Error(chalk.red(error))
    }
}

readFile('./src/files/text1.md')