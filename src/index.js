import chalk from 'chalk'
import fs from 'fs'

/**
 * Show the links from a .md
 * @param {String} file
 * @returns {Object} with the links
 */
async function showLinks(file){
    const text = await readFile(file)
    const links = linkExtractor(text)
    return links
}

/**
 * Catch a file and extract its text
 * @param {String} path to the file
 * @returns {String} the pure text from the file
 */
async function readFile(path) {
    try {
        const text = await fs.promises.readFile(path, 'utf-8')
        return text
    } catch (error) {
        throw new Error(chalk.red(error.code, 'this file doesn\'t exist in this path'))
    }
}

/**
 * Extract the links from .md
 * @param {String} markDownText
 * @returns {Object} with all links
 */
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

export default showLinks