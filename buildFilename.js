const buildFilename = (r) => {
    let fType = r.headers && r.headers.accept === 'application/json' ? '.json' : '.xml'
    return r.url
    .replaceAll('/', '_')
    .replaceAll('?', '.')
    .replaceAll('&', '#')
    .replaceAll('=', '_') + fType
}

export { buildFilename }