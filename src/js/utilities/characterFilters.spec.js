import { getFilteredCharactersByAlignment } from './characterFilters';
import { getFilteredCharactersByPublisher } from './characterFilters';

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
  {
    id: 2,
    name: 'Evil-A-Bomb',
    slug: '2-b-bomb',
    powerstats: {
      intelligence: 38, strength: 100, speed: 17, durability: 80, power: 24, combat: 64,
    },
    appearance: {
      gender: 'Male', race: 'Human', height: ['6\'8', '203 cm'], weight: ['980 lb', '441 kg'], eyeColor: 'Yellow', hairColor: 'No Hair',
    },
    biography: {
      fullName: 'Richard Milhouse Jones', alterEgos: 'No alter egos found.', aliases: ['Rick Jones'], placeOfBirth: 'Scarsdale,  Arizona', firstAppearance: 'Hulk Vol 2 #2 (April,  2008) (as A-Bomb)', publisher: 'Not Marvel Comics', alignment: 'bad',
    },
    work: {
      occupation: 'Musician,  adventurer,  author; formerly talk show host', base: '-',
    },
    connections: {
      groupAffiliation: 'Hulk Family; Excelsior (sponsor), Avengers (honorary member); formerly partner of the Hulk, Captain America and Captain Marvel; Teen Brigade; ally of Rom', relatives: 'Marlo Chandler-Jones (wife); Polly (aunt); Mrs. Chandler (mother-in-law); Keith Chandler, Ray Chandler, three unidentified others (brothers-in-law); unidentified father (deceased); Jackie Shorr (alleged mother; unconfirmed)',
    },
  },
];

describe('characterFilters.js', () => {
  it('Should return an array of characters filtered by publisher', () => {
    const filteredList = getFilteredCharactersByPublisher(characters, 'Marvel Comics');
    expect(filteredList).toEqual([characters[0]]);
  });

  it('returns a filtered array of only the "good" characters from an array of characters', () => {
    const goodCharacters = getFilteredCharactersByAlignment(characters, 'good');
    expect(goodCharacters).toEqual([characters[0]]);
  });

  it('returns a filtered array of only the "bad" characters from an array of characters', () => {
    const badCharacters = getFilteredCharactersByAlignment(characters, 'bad');
    expect(badCharacters).toEqual([characters[1]]);
  });
});