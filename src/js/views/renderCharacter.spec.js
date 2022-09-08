import { characterHTML } from './renderCharacter';

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
  it('characterHTML has the correct content', () => {
    expect(characterHTML).toEqual(testCharacterHTML);
  });
});
