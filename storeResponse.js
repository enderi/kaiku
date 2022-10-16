import fs from 'fs'
import { buildFilename } from './buildFilename.js'

const storeResponse = (req, response) => {
    let fName =  './responses/' + 'GET_' + buildFilename(req)
    fs.writeFileSync(fName, JSON.stringify(response.data))
}

export { storeResponse };