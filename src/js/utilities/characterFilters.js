/*  getFilteredCharactersByAlignment
*   @param {[Character]} Character array to filter
*   @param {String}   Alignment of characters in output arr
*/
export function getFilteredCharactersByAlignment(characters, alignment) {
  const result = characters.filter((char) => char.biography.alignment === alignment);
  return result;
}

// Takes an array of characters, and a publisher to filter by.
// Returns an array of characters filtered by publisher.
export function getFilteredCharactersByPublisher(arr, publisher) {
  return arr.filter((char) => char.biography.publisher.toLowerCase() === publisher.toLowerCase());
}