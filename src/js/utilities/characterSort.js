function getCharactersSortedByName(characters) {
  return characters.sort((a, b) => {
    if (a.name < b.name) {
      return -1; // a goes before b
    }
    if (a.name > b.name) {
      return 1; // a goes after b
    }
    return 0; // a and b aren't moved
  });
}

function getSortedCharactersByPowerStat(characters, powerstat) {
  // eslint-disable-next-line max-len
  return characters.sort((a, b) => a.powerstats[powerstat.toLowerCase()] - b.powerstats[powerstat.toLowerCase()]);
}

function getSortedCharacterById(characters) {
  return characters.sort((a, b) => a.id - b.id);
}

// Returns an sorted array of Character objects, depending on the string input.
export function getSortedCharacters(characters, sort) {
  switch (sort) {
    case 'name':
      return getCharactersSortedByName(characters);
    case 'intelligence':
    case 'strength':
    case 'combat':
      return getSortedCharactersByPowerStat(characters, sort);
    default:
      return getSortedCharacterById(characters);
  }
}
