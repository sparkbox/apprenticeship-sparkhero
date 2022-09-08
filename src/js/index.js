import '@/assets/fonts/Bangers/index.scss';
import '@/assets/fonts/LeagueSpartan/index.scss';
import '@/assets/scss/base.scss';
import { getCharactersAll } from '@/js/services/characterService.js';
import renderCharacters from './views/renderCharacter';

(async () => {
  const allCharacters = await getCharactersAll();
  console.debug(`%cPow! Bam! ${allCharacters.length} heroes and villains retrieved!`, 'font-family: Menlo, monospace; color: yellow;"');
  renderCharacters();
})();
