import { getFilteredCharactersByAlignment } from './characterFilters';

describe('getFilteredCharactersByAlignment', () => {
  const characters = [
    {
      id: 3,
      name: 'Abin Sur',
      biography: {
        alignment: 'good',
      },
    },
    {
      id: 4,
      name: 'Abomination',
      biography: {
        alignment: 'bad',
      },
    },
    {
      id: 5,
      name: 'Abraxas',
      biography: {
        alignment: 'bad',
      },
    },
  ];

  it('returns a filtered array of only "good" characters', () => {
    const goodCharacters = getFilteredCharactersByAlignment(characters, 'good');
    expect(goodCharacters).toEqual([characters[0]]);
  });

  it('returns a filtered array of only "bad" characters', () => {
    const badCharacters = getFilteredCharactersByAlignment(characters, 'bad');
    expect(badCharacters).toEqual([characters[1], characters[2]]);
  });
});
