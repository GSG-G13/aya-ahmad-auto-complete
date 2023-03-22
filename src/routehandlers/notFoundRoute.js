const fs = require('fs');
const path = require('path')

const notFoundRouting = (req, res) => {
    const filePath = path.join(__dirname, '..', '..', 'public', 'notFound.html')
    fs.readFile(filePath, (err, file) => {
        if (err) {
            res.writeHead(500, { 'content-type': 'text/html' })
            res.end('<div>500 - Internal Server Error</div>');
        }
        else {
            res.writeHead(404, { 'content-type': 'text/html' });
            res.end(file)
        }
    })
}


module.exports = notFoundRouting;