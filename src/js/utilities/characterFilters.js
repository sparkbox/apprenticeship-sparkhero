// Takes an array of characters, and a publisher to filter by.
// Returns an array of characters filtered by publisher.
export function getFilteredCharactersByPublisher(arr, publisher) {
  return arr.filter((char) => char.biography.publisher.toLowerCase() === publisher.toLowerCase());
}
