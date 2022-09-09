import { getSortedCharacters } from './characterSort';

describe('characterSort.js', () => {
  it('Should return an unsorted array of characters.', () => {
    const characters = [
      {
        id: 1,
        name: 'A-Bomb',
        slug: '1-a-bomb',
        powerstats: {
          intelligence: 38, strength: 100, speed: 17, durability: 80, power: 24, combat: 64,
        },
        appearance: {
          gender: 'Male', race: 'Human', height: ['6\'8', '203 cm'], weight: ['980 lb', '441 kg'], eyeColor: 'Yellow', hairColor: 'No Hair',
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
    ];
    expect(getSortedCharacters(characters, '')).toEqual(characters);
  });
});
