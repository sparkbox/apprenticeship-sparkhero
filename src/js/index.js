import '@/assets/fonts/Bangers/index.scss';
import '@/assets/fonts/LeagueSpartan/index.scss';
import '@/assets/scss/base.scss';
import { getCharactersAll } from '@/js/services/characterService.js';
import renderCharacters from './views/renderCharacter';
import { getSelectedFilterRole, bindCharacterFilterRole } from './bindings/role';
import { bindCharacterFilterPublisher, getSelectedFilterPublisher } from './bindings/publisher';
import { bindCharacterSort, getSelectedSortOption } from './bindings/sort';
import { getFilteredCharactersByPublisher, getFilteredCharactersByAlignment }
  from './utilities/characterFilters';
import { getSortedCharacters } from './utilities/characterSort';

// characterFilterOrSortingUpdated should take an array of characters
// it changes the publisher filter, then the role filter, and finally sorts by powerstat or name
const characterFilterOrSortingUpdated = (characters) => () => {
  // our characters array
  // get the selected publisher(s)
  const publishers = getSelectedFilterPublisher();
  // filter the list of characters by their publisher(s)
  const filteredByPublisherCharacters = getFilteredCharactersByPublisher(characters, publishers);
  // get selected role/alignment
  const roleSelection = getSelectedFilterRole();
  // filter the list of characters again
  const filteredByAlignmentCharacters = getFilteredCharactersByAlignment(
    filteredByPublisherCharacters,
    roleSelection,
  );
  // get the selected sorting option from the dropdown
  const sortSelection = getSelectedSortOption();
  // sort the list based on powerstat or name (or none)
  const sortedCharacters = getSortedCharacters(filteredByAlignmentCharacters, sortSelection);
  // re-render the newest list of filtered & sorted characters
  renderCharacters(sortedCharacters);
};

(async () => {
  const characters = await getCharactersAll();
  renderCharacters(characters);

  const updateFilters = characterFilterOrSortingUpdated(characters);

  bindCharacterFilterPublisher(updateFilters);
  bindCharacterFilterRole(updateFilters);
  bindCharacterSort(updateFilters);
})();
