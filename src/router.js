const {
    publicRouting,
    homeRouting,
    notFoundRouting,
    searchRoute,
  } = require('./allRoutes');
  
  const router = (req, res) => {
    const endpoint = req.url;
    if (endpoint === '/') homeRouting(req, res);
    else if (endpoint.includes('/public/')) publicRouting(req, res);
    else if (endpoint.includes('search')) searchRoute(req, res);
    else notFoundRouting(req, res);
  };
  
  module.exports = router;
  