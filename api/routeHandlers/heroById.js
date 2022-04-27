const { heroIdIsValid, getHeroById } = require('../utilities/utilities.js');

module.exports = (id) => {
  const idNumber = Number(id);

  if (!heroIdIsValid(idNumber)) {
    throw new Error(`Hero "${id}" not found.`);
  }

  const hero = getHeroById(idNumber);

  return hero;
};
