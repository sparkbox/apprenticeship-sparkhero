export const characterHTML = (heroName, heroIntelligence, heroStrength, heroCombat, herosImage) => `
    <div class="hero__inner">
        <h3 class="hero__name">${heroName}</h3>
        <img class="hero__image" src="${process.env.API_URL}/image/${herosImage}" width="100%" height="auto" />
        <ul class="hero__powerstats">
            <li class="hero__powerstat hero__powerstat--intelligence">
                <p class="hero__powerstat-label">Intelligence</p>
                <div class="hero__powerstat-graph" style="width: ${heroIntelligence}%">
                    <span class="visually-hidden">Intelligence: ${heroIntelligence}</span>
                </div>
            </li>
            <li class="hero__powerstat hero__powerstat--strength">
                <p class="hero__powerstat-label">Strength</p>
                <div class="hero__powerstat-graph" style="width: ${heroStrength}%">
                    <span class="visually-hidden">Strength: ${heroStrength}</span>
                </div>
            </li>
            <li class="hero__powerstat hero__powerstat--combat">
                <p class="hero__powerstat-label">Combat</p>
                <div class="hero__powerstat-graph" style="width: ${heroCombat}%">
                    <span class="visually-hidden">Combat: ${heroCombat}</span>
                </div>
            </li>
        </ul>
    </div>
`;

export const createHeroListElement = () => {
  const heroNode = document.createElement('li');
  heroNode.classList.add('hero');
  return heroNode;
};

// eslint-disable-next-line max-len
export const insertCharacterHTML = (heroNode, heroName, heroIntelligence, heroStrength, heroCombat, herosImage) => {
  heroNode.insertAdjacentHTML('beforeend', characterHTML(heroName, heroIntelligence, heroStrength, heroCombat, herosImage));
};

export default function renderCharacters(characters) {
  // clears previous rendered characters
  const ul = document.getElementById('hero-list');
  ul.innerHTML = '';
  // eslint-disable-next-line no-unused-vars
  characters.forEach((character) => {
    // add hero name, stats, and images to card
    const heroName = character.name;
    const heroIntelligence = character.powerstats.intelligence;
    const heroStrength = character.powerstats.strength;
    const heroCombat = character.powerstats.combat;
    const herosImage = character.id;
    // Create hero card element, give it classes, and insert the characterHTML into it.
    const heroNode = createHeroListElement();
    insertCharacterHTML(heroNode, heroName, heroIntelligence, heroStrength, heroCombat, herosImage);
    // Append hero card to the hero's list.
    ul.appendChild(heroNode);
  });
}
