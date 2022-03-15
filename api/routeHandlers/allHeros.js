const { allHeros } = require('../utilities/utilities.js');

module.exports = () => allHeros.map(({ image, ...rest }) => rest);
