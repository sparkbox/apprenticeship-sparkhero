const HTTP_HEADERS = require('./utilities/httpHeaders.js');
const HTTP_STATUS_CODES = require('./utilities/httpStatusCodes.js');
const routeHandlerGetAllHeros = require('./routeHandlers/allHeros.js');

exports.handler = async () => ({
  headers: HTTP_HEADERS,
  statusCode: HTTP_STATUS_CODES.OKAY,
  body: JSON.stringify(routeHandlerGetAllHeros()),
});
