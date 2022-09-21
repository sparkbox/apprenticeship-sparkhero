import '@/assets/fonts/Bangers/index.scss';
import '@/assets/fonts/LeagueSpartan/index.scss';
import '@/assets/scss/base.scss';
// import { getCharacterById } from '@/js/services/characterService.js';
import { getCharactersAll } from '@/js/services/characterService.js';
import renderCharacters from './views/renderCharacter';
import { getSelectedFilterRole, bindCharacterFilterRole } from './bindings/role';

const characterFilterOrSortingUpdated = (value, characters) => {
  const filteredList = getSelectedFilterRole(value, characters);
  document.getElementById('hero-list').innerHTML = '';
  renderCharacters(filteredList);
};

(async () => {
  const characters = await getCharactersAll();
  renderCharacters(characters);
  bindCharacterFilterRole(characters, characterFilterOrSortingUpdated);
})();
