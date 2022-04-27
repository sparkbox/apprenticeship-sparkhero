const HTTP_HEADERS = require('./utilities/httpHeaders.js');
const HTTP_STATUS_CODES = require('./utilities/httpStatusCodes.js');
const routeHandlerGetHeroById = require('./routeHandlers/heroById.js');
const { getIdFromPath } = require('./utilities/utilities.js');

exports.handler = async ({ path }) => {
  const requestedHeroId = getIdFromPath(path);

  let statusCode;
  let responseBody;

  try {
    const retrievedHero = routeHandlerGetHeroById(requestedHeroId);
    statusCode = HTTP_STATUS_CODES.OKAY;
    responseBody = retrievedHero;
  } catch ({ message }) {
    statusCode = HTTP_STATUS_CODES.BAD_REQUEST;
    responseBody = message;
  }

  return {
    headers: HTTP_HEADERS,
    statusCode,
    body: JSON.stringify(responseBody),
  };
};
