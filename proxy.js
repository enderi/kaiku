import express from 'express'
import morgan from 'morgan'
import axios from 'axios'
import { storeResponse } from './storeResponse.js'
import { mockResponse } from './mockResponse.js'
import { routing } from './routing.js'

const app = express()

let args = process.argv.slice(2)

let recordMode = false
let mockMode = false
if (args.indexOf('record') !== -1) {
    recordMode = true
    console.log('Started in record mode')
} else if (args.indexOf('mock') !== -1) {
    mockMode = true
    console.log('Started in mock mode')
} else {
    console.log('Started in proxy mode')
}

app.use(morgan('combined'))

routing.forEach(r => {
    console.log(`Build routing for ${r.target}`)
    app.get(`/${r.pathPrefix}/*`, (req, res) => {
        let url = r.target + req.url.replace(`/${r.pathPrefix}`, '')
        if (mockMode) {
            try {
                console.log('Looking for a local ')
                var content = mockResponse(req)
                res.status(200).send(content)
            } catch (error) {
                console.log('Error: ', error)
                res.status(404).send()
            }
        } else {
            console.log(`Query url ${url}`)
            axios
                .get(url)
                .then(response => {
                    if (recordMode) storeResponse(req, response)
                    res.status(200).send(response.data)
                })
                .catch((r) => {
                    res.status(r.response.status).send(r.response.statusText)
                })
        }
    })
})

app.listen(3000)