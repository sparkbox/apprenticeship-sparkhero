// function takes a callback and executes when checkboxes under #hero-filter-publisher is changed.
export function bindCharacterFilterPublisher(callback) {
  const allCheckboxes = document.querySelectorAll('#hero-filter-publisher input[type="checkbox"]');
  // loop over checkboxes w/ event listener to detect if they are checked
  allCheckboxes.forEach((checkbox) => checkbox.addEventListener('change', () => {
    callback();
  }));
}

// filters from checkboxes
export function getSelectedFilterPublisher() {
// selects whatever has hero-filter-publisher id and has checkbox input
  const allCheckboxes = document.querySelectorAll('#hero-filter-publisher input[type="checkbox"]');
  // eslint-disable-next-line max-len
  // from copy of array of items returned above, filters for checked item, returns name of publisher (element.defaultValue)
  const selectedFilterPublisher = [...allCheckboxes]
    .filter((element) => element.checked === true)
    .map((element) => element.defaultValue);

  // returns chosen publisher filters (empty, DC, marvel, both)
  return selectedFilterPublisher;
}
