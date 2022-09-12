export const characterHTML = `
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

export const createHeroListElement = () => {
  const heroNode = document.createElement('li');
  heroNode.classList.add('hero');
  return heroNode;
};

export const insertCharacterHTML = (heroNode) => {
  heroNode.insertAdjacentHTML('beforeend', characterHTML);
};

export default function renderCharacters(arr) {
  arr.forEach((element) => {
    // Create hero card element, give it classes, and insert the characterHTML into it.
    const heroNode = createHeroListElement();
    insertCharacterHTML(heroNode);
    // Append hero card to the hero's list.
    document.getElementById('hero-list').appendChild(heroNode);
  });
}
