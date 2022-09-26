import '@/assets/fonts/Bangers/index.scss';
import '@/assets/fonts/LeagueSpartan/index.scss';
import '@/assets/scss/base.scss';
// import { getCharacterById } from '@/js/services/characterService.js';
import { getCharactersAll } from '@/js/services/characterService.js';
import renderCharacters from './views/renderCharacter';
// eslint-disable-next-line no-unused-vars
import { getSelectedFilterRole, bindCharacterFilterRole } from './bindings/role';
import { bindCharacterFilterPublisher, getSelectedFilterPublisher } from './bindings/publisher';

// filter characters by publishers
export function getFilteredCharactersByPublisher(characters, publishers) {
  // eslint-disable-next-line max-len
  // create a copy of characters array and filter by character then return a list of characters who have a publisher value.
  const filteredCharactersByPublisher = [...characters]
    .filter((character) => publishers
      .includes(character.biography.publisher));
  return filteredCharactersByPublisher;
}

async function characterFilterOrSortingUpdated() {
  // get filtered publishers--look at Dom, see what checkboxes are checked
  const publishers = getSelectedFilterPublisher();
  // get all characters
  const characters = await getCharactersAll();
  const filteredCharacters = getFilteredCharactersByPublisher(characters, publishers);
  renderCharacters(filteredCharacters);
}

(async () => {
  const characters = await getCharactersAll();
  renderCharacters(characters);
})();

bindCharacterFilterPublisher(characterFilterOrSortingUpdated);
