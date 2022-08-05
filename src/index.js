import chalk from 'chalk'
import fs from 'fs'

async function readFile(path) {
    try {
        const text = await fs.promises.readFile(path, 'utf-8')
        console.log(text)
    } catch (error) {
        throw new Error(chalk.red(error))
    }
}

function linkExtractor(markDownText) {
    const regex = /\[([^\]]+)\]\((http(s)?:\/\/[^\)]+)\)/gim
    const links = {}
    let link
    // Loop through each occurrence
    while ((link = regex.exec(markDownText)) != null) {
        links[link[1]] = link[2]
    }
    return links
}

const text = "São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.)"
console.log(linkExtractor(text))

readFile('./src/files/text1.md')