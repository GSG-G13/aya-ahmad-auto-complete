const publicRouting = require('./routehandlers/publicRoute');
const homeRouting = require('./routehandlers/homeRoute');
const notFoundRouting = require('./routehandlers/notFoundRoute');
const searchRoute = require('./routehandlers/searchRoute');

module.exports = {
  publicRouting,
  homeRouting,
  notFoundRouting,
  searchRoute,
};
