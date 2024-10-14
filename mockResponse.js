import fs from 'fs'
import { buildFilename } from './buildFilename.js'

const mockResponse = (req, method = 'GET') => {
    let fName =  './responses/' + method + '_' + buildFilename(req)
    console.log(`Filename to look for ${fName}`)
    let fileContent = fs.readFileSync(fName)
    let response = JSON.parse(fileContent)
console.log('So response was ', response)
    return response
}

export { mockResponse };