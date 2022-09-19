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

// Returns an sorted array of Character objects, depending on the string input.
export function getSortedCharacters(characters, sort) {
  switch (sort) {
    case 'name':
      return getCharactersSortedByName(characters);
    default:
      return characters;
  }
}
