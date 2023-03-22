const fs = require('fs');
const path = require('path');
const mime = require('mime-types');

const publicRouting = (req, res) => {
    const endpoint = req.url;
    const methold = req.methold;

    const filePath = path.join(__dirname, '..', '..', endpoint)
    fs.readFile(filePath, (err, file) => {
        if (err) {
            res.writeHead(500, { 'content-type': 'text/html' })
            res.end('<div>500 - Internal Server Error</div>');
        }
        else {
            res.writeHead(200, { 'content-type': mime.lookup(endpoint) });
            res.end(file)
        }
    })
}


module.exports = publicRouting