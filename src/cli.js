import fileReader from './index.js'

(async () => {
    const path = process.argv[2]
    console.log(await fileReader(path))
})()