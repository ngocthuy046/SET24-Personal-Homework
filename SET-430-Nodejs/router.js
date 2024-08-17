const {
    writePong,
    writeHello
} = require('./controller');

function router(req,res) {
    switch (req.url) {
        case '/ping':
            switch (req.method) {
                case 'GET':
                    writePong(req, res);
                    break;
                default:
                    res.writeHead(405, { 'Content-Type': 'text/plain' });
                    res.end('Method Not Allowed')
            }
            break
        case '':
            writeHello(req,res)
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' })
            res.end('Page not found')
    }
}

module.exports = {
    router
}