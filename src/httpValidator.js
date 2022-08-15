import fetch from 'node-fetch'

/**
 * See if the links are working
 * @param {Object} links object with links 
 */
async function verifyURLs(links){
    const linksArr = objToArray(links) // Clean up
    const status = await verifyStatusCode(linksArr)

    let newLinks = {}
    let i = 0

    for(const key in links){
        newLinks[key] = { 
            link: linksArr[i], 
            status: status[i]
        }

        i++
    }

    return newLinks
}

/**
 * Return the status code from each URL
 * @param {Array} links 
 * @returns {Array} with the status code
 */
async function verifyStatusCode(links){
    return await Promise.all(links.map(async link => {
        const response = await fetch(link)
        return response.status
    }))
}

/**
 * Take the links from an object into an array
 * @param {Object} object with links
 * @returns {Array} with only the links
 */
function objToArray(object){
    return Object.values(object)
}

export default verifyURLs