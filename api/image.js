const fs = require('fs');
const path = require('path');
const HTTP_HEADERS = require('./utilities/httpHeaders.js');
const HTTP_STATUS_CODES = require('./utilities/httpStatusCodes.js');
const routeHandlerGetHeroImageById = require('./routeHandlers/heroImageById.js');
const { getIdFromPath } = require('./utilities/utilities.js');

exports.handler = async ({ path: contextPath }) => {
  const requestedHeroId = getIdFromPath(contextPath);

  let statusCode;
  let body;
  let headers;
  let isBase64Encoded = false;

  try {
    const heroImage = routeHandlerGetHeroImageById(requestedHeroId);
    const imagePath = path.join(__dirname, `data/${heroImage}`);
    const imageBuffer = fs.readFileSync(imagePath);

    statusCode = HTTP_STATUS_CODES.OKAY;
    body = imageBuffer.toString('base64');
    headers = { 'Content-type': 'image/jpeg' };
    isBase64Encoded = true;
  } catch ({ message }) {
    console.log(message);
    statusCode = HTTP_STATUS_CODES.BAD_REQUEST;
    body = JSON.stringify(message);
  }

  return {
    headers: {
      ...HTTP_HEADERS,
      ...headers,
    },
    statusCode,
    body,
    isBase64Encoded,
  };
};
