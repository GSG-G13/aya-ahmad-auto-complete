const fs = require('fs');
const path = require('path')

const homeRouting = (req, res) => {
    const filePath = path.join(__dirname, '..', '..', 'public', 'index.html')
    fs.readFile(filePath, (err, file) => {
        if (err) {
            res.writeHead(500, { 'content-type': 'text/html' })
            res.end('<div>500 - Internal Server Error</div>');
        }
        else {
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(file)
        }
    })
}


module.exports = homeRouting;