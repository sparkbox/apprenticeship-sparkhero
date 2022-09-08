import '@/assets/fonts/Bangers/index.scss';
import '@/assets/fonts/LeagueSpartan/index.scss';
import '@/assets/scss/base.scss';
import { getCharacterById } from '@/js/services/characterService.js';
import renderCharacters from './views/renderCharacter';

(async () => {
  const { name: characterName } = await getCharacterById(70);
  console.debug(`%cNa na na na na na na na na na na na na, ${characterName}!`, 'font-family: Menlo, monospace; color: yellow;"');
  renderCharacters();
})();
