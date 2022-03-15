import dataHerosAll from '../data/all.json';

export const allHeros = dataHerosAll;

export const heroIdsAll = dataHerosAll.map(({ id }) => id);

export const heroIdIsValid = (id) => heroIdsAll.includes(id);

export const getHeroById = (id) => dataHerosAll.find(({ id: _id }) => id === _id);
