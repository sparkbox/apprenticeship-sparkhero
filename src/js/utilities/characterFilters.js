/**
 * getFilteredCharacterByAlignment
 * @param {Character[]}   characters  Character array to filter
 * @param {String}        alignment   Alignment of characters in output array
 * @returns {Character[]} Filtered character array
 */
export function getFilteredCharactersByAlignment(characters, alignment) {
  if (alignment === 'all') return characters;

  return characters.filter((char) => char.biography.alignment === alignment);
}

// Takes an array of characters, and a publisher to filter by.
// Returns an array of characters filtered by publisher.
export function getFilteredCharactersByPublisher(characters, publishers) {
  return characters.filter((character) => publishers
    .includes(character.biography.publisher));
}
