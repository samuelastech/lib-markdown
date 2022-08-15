import chalk from 'chalk'
import fs from 'fs'

async function readFile(path) {
    try {
        const text = await fs.promises.readFile(path, 'utf-8')
        console.log(linkExtractor(text))
    } catch (error) {
        throw new Error(chalk.red(error.code, 'this file doesn\'t exist in this path'))
    }
}

function linkExtractor(markDownText) {
    const regex = /\[([^\]]+)\]\((http(s)?:\/\/[^\)]+)\)/gim
    const links = {}
    let link
    // Loop through each occurrence
    while ((link = regex.exec(markDownText)) != null) {
        links[link[1]] = link[2] 
        // Regex: group 1 -- group2
    }
    return links
}

readFile('./src/files/text2.md')