import fileReader from './index.js'
import httpValidator from './httpValidator.js'

(async () => {
    const path = process.argv[2]
    const links = await fileReader(path)

    if(process.argv[3] === 'validate')
        console.log("Validated links:\n\n", httpValidator(links))
    else
        console.log("Links list:\n\n", links)
})()