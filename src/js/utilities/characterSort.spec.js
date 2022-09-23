import { getSortedCharacters } from './characterSort';

function createTestArray() {
  return [
    {
      id: 1,
      name: 'A-Bomb',
      slug: '1-a-bomb',
      powerstats: {
        intelligence: 1, strength: 1, speed: 1, durability: 1, power: 1, combat: 1,
      },
      appearance: {
        gender: 'Male', race: 'Human', height: ['1', '1 cm'], weight: ['0 lb', '0 kg'], eyeColor: 'Yellow', hairColor: 'No Hair',
      },
      biography: {
        fullName: 'Richard Milhouse Jones', alterEgos: 'No alter egos found.', aliases: ['Rick Jones'], placeOfBirth: 'Scarsdale,  Arizona', firstAppearance: 'Hulk Vol 2 #2 (April,  2008) (as A-Bomb)', publisher: 'Marvel Comics', alignment: 'good',
      },
      work: {
        occupation: 'Musician,  adventurer,  author; formerly talk show host', base: '-',
      },
      connections: {
        groupAffiliation: 'Hulk Family; Excelsior (sponsor), Avengers (honorary member); formerly partner of the Hulk, Captain America and Captain Marvel; Teen Brigade; ally of Rom', relatives: 'Marlo Chandler-Jones (wife); Polly (aunt); Mrs. Chandler (mother-in-law); Keith Chandler, Ray Chandler, three unidentified others (brothers-in-law); unidentified father (deceased); Jackie Shorr (alleged mother; unconfirmed)',
      },
    },
    {
      id: 2,
      name: 'B-Bomb',
      slug: '2-b-bomb',
      powerstats: {
        intelligence: 2, strength: 2, speed: 2, durability: 2, power: 2, combat: 2,
      },
      appearance: {
        gender: 'Non-Binary', race: 'Demi-human', height: ['2', '2 cm'], weight: ['1 lb', '1 kg'], eyeColor: 'Yellow', hairColor: 'No Hair',
      },
      biography: {
        fullName: 'Richard "Evil" Jones', alterEgos: 'No alter egos found.', aliases: ['Evil Rick Jones'], placeOfBirth: 'Scarsdale,  Arizona', firstAppearance: 'Hulk Vol 2 #2 (April,  2008) (as EA-Bomb)', publisher: 'Not Marvel Comics', alignment: 'bad',
      },
      work: {
        occupation: 'Bank robber, evildoer, lawyer', base: '-',
      },
      connections: {
        groupAffiliation: 'Evil Avengers (honorary member); formerly partner of the Red Hulk',
      },
    },
    {
      id: 3,
      name: 'C-Bomb',
      slug: '3-c-bomb',
      powerstats: {
        intelligence: 3, strength: 3, speed: 3, durability: 3, power: 3, combat: 3,
      },
      appearance: {
        gender: 'Female', race: 'Ant-Person', height: ['3', '3 cm'], weight: ['2 lb', '2 kg'], eyeColor: 'Yellow', hairColor: 'No Hair',
      },
      biography: {
        fullName: 'Rebecca "Tiny" Jones', alterEgos: 'No alter egos found.', aliases: ['Reb Jones'], placeOfBirth: 'Scarsdale,  Arizona', firstAppearance: 'Hulk Vol 2 #2 (April,  2008) (as EA-Bomb)', publisher: 'Not DC Comics', alignment: 'good',
      },
      work: {
        occupation: 'Locksmith, Electrician', base: '-',
      },
      connections: {
        groupAffiliation: 'Florida Avengers (honorary member); formerly partner of the Wasp',
      },
    },

  ];
}

describe('getSortedCharacters', () => {
  it('Should return an array sorted by id, given no matching parameter', () => {
    const orderedTestArray = createTestArray();
    const [a, b, c] = createTestArray();
    const outOfOrderArr = [c, b, a];

    expect(getSortedCharacters(outOfOrderArr, '')).toEqual(orderedTestArray);
  });

  it('Should return an array of characters sorted by name, given the argument "name"', () => {
    const orderedTestArray = createTestArray();
    const [a, b, c] = createTestArray();
    const outOfOrderArr = [c, b, a];
    expect(getSortedCharacters(outOfOrderArr, 'name')).toEqual(orderedTestArray);
  });

  it('returns the unsorted array of characters when no valid powerstat argument is given', () => {
    const orderedCharacterArray = createTestArray();
    const testArr = createTestArray();
    expect(getSortedCharacters(testArr, '')).toEqual(orderedCharacterArray);
    expect(getSortedCharacters(testArr, 'durability')).toEqual(orderedCharacterArray);
  });

  // if the intelligence/strength/combat powerstats are given...
  it('sorts the array highest to lowest based on the value of the powerstat argument', () => {
    // original array from above function is 1, 2, 3 by strength
    const orderedCharacterArray = createTestArray();
    const [a, b, c] = createTestArray();
    // once that goes through the sorting function, it should come out as sortedArray (3, 2, 1)
    const sortedArray = [c, b, a];
    expect(getSortedCharacters(orderedCharacterArray, 'strength')).toEqual(sortedArray);
  });
});
