const fs = require('fs');
const path = require('path');
//function handles HTTP requests to a search route and searches a JSON file for a specific string.
const searchRoute = (req, res) => {
  const jsonFile = path.join(__dirname, '..', 'data.json');
  //extracts the search query parameter from the URL of the HTTP request 
  // const search = req.url.split('/')[2].replace(/%20/g,' ');
  const search = req.url ? req.url.split('/')[2].replace(/%20/g,' ') : '';
  fs.readFile(jsonFile, (err, data) => {
    const jsonData = JSON.parse(data.toString());
    const result = [];
    //will be used to match against the entries in the JSON file to find any that begin with the search query.
    const re = new RegExp(`^${search}`, 'gi');
    /*The gi flags at the end of the regular expression constructor
     are used to make the search case-insensitive (the i flag) and to match 
    all occurrences of the search query, not just the first (the g flag).*/

    if (err) {
      res.writeHead(500);
      res.end('<h1> internal server error </h1>');
    } else {
      if (search) {
        for (let key in jsonData) {
          if (jsonData[key].match(re))
            result.push({ id: key, title: jsonData[key] });
        }
      }
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(result));
    }
  });
};

module.exports = searchRoute;
