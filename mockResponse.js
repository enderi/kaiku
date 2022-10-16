import fs from 'fs'
import { buildFilename } from './buildFilename.js'

const mockResponse = (req) => {
    let fName =  './responses/' + 'GET_' + buildFilename(req)
    return fs.readFileSync(fName)
}

export { mockResponse };