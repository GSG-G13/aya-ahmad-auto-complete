const http = require('http')
const router = require('./router')
require('dotenv').config();

const port = process.env.PORT || 3000;
const server = http.createServer(router)

server.listen(port, () => {
    console.log(`server is running in http://localhost:${port}`);
    
    
}) 
