const dataHerosAll = require('../data/all.json');

const heroIdsAll = dataHerosAll.map(({ id }) => id);

exports.allHeros = dataHerosAll;

exports.heroIdsAll = heroIdsAll;

exports.heroIdIsValid = (id) => heroIdsAll.includes(id);

exports.getHeroById = (id) => dataHerosAll.find(({ id: _id }) => id === _id);

exports.getIdFromPath = (path) => {
  const segments = path.split('/').filter((e) => e);
  return segments[segments.length - 1];
};
