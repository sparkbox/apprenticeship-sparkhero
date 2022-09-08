import '@/assets/fonts/Bangers/index.scss';
import '@/assets/fonts/LeagueSpartan/index.scss';
import '@/assets/scss/base.scss';
// import { getCharacterById } from '@/js/services/characterService.js';
import { getCharactersAll } from '@/js/services/characterService.js';
import renderCharacters from './views/renderCharacter';

(async () => {
  const characters = await getCharactersAll();
  renderCharacters(characters);
})();
