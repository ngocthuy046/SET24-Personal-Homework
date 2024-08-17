function writePong(req,res) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.write('Pong')
    res.end()
}

function writeHello(req,res) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.write('Hello')
    res.end()
}

module.exports = {
    writePong,
    writeHello
}