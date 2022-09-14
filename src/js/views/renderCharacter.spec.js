/**
 * @jest-environment jsdom
 */
import { characterHTML, createHeroListElement, insertCharacterHTML } from './renderCharacter';
// eslint-disable-next-line no-unused-vars
const testCharacterHTML = `
    <div class="hero__inner">
        <h3 class="hero__name">Spider-Man</h3>
        <img class="hero__image" src="${process.env.API_URL}/image/620" width="100%" height="auto" />
        <ul class="hero__powerstats">
            <li class="hero__powerstat hero__powerstat--intelligence">
                <p class="hero__powerstat-label">Intelligence</p>
                <div class="hero__powerstat-graph" style="width: 100%">
                    <span class="visually-hidden">Intelligence: 100</span>
                </div>
            </li>
            <li class="hero__powerstat hero__powerstat--strength">
                <p class="hero__powerstat-label">Strength</p>
                <div class="hero__powerstat-graph" style="width: 26%">
                    <span class="visually-hidden">Strength: 26</span>
                </div>
            </li>
            <li class="hero__powerstat hero__powerstat--combat">
                <p class="hero__powerstat-label">Combat</p>
                <div class="hero__powerstat-graph" style="width: 100%">
                    <span class="visually-hidden">Combat: 100</span>
                </div>
            </li>
        </ul>
    </div>
`;

describe('renderCharacter.js', () => {
  it('characterHTML returns dynamic values for character stats and name', () => {
    // eslint-disable-next-line max-len
    const heroName = 'Test Hero';
    const heroIntelligence = 10;
    const heroStrength = 10;
    const heroCombat = 10;
    const herosImage = 4;
    // eslint-disable-next-line max-len
    // tests return value of this
    // eslint-disable-next-line max-len
    const returnedHTML = characterHTML(heroName, heroIntelligence, heroStrength, heroCombat, herosImage);

    expect(returnedHTML).toContain(`${heroName}`);
    // eslint-disable-next-line max-len
    // the following values are numbers, but we must convert to string because
    // .toContain() matcher deals with strings
    expect(returnedHTML).toContain(`Intelligence: ${heroIntelligence.toString()}`);
    expect(returnedHTML).toContain(`Strength: ${heroStrength.toString()}`);
    expect(returnedHTML).toContain(`Combat: ${heroCombat.toString()}`);
    expect(returnedHTML).toContain(`/image/${herosImage.toString()}`);
  });

  // easier to read test if your break into individual function
  // this one adds hero class for li
  describe('createHeroListElement', () => {
    it('creates an li with the class hero', () => {
      const listElement = createHeroListElement();
      expect(listElement.classList.contains('hero')).toBe(true);
    });
  });
  describe('insertCharacterHTML', () => {
    it('inserts character HTML at the end of a node', () => {
      // arrange
      // create div DOM node for testing with some <p> stuff in it already
      document.body.innerHTML = `
        <div>
          <p>This is a placeholder</p>
        </div>
      `;

      // act
      // call insertCharacterHTML into the div
      const element = document.querySelector('p');
      insertCharacterHTML(element);

      // assert
      // check the DOM node hero_inner to see if it has the placeholder content in it
      const characterElement = document.querySelector('.hero__inner');
      expect(characterElement).not.toBeNull();
    });
  });
});
