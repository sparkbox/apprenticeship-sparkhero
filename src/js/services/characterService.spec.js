import { get } from '@/js/services/apiService';
import { getCharacterById, getCharactersAll } from './characterService';

// Mock out our API service so we can test the character service in isolation.
jest.mock('@/js/services/apiService');
// Mock out the console API so we don't get unnecessary noise in our tests.
jest.spyOn(console, 'error').mockImplementation(() => {});

describe('Character Service', () => {
  describe('Successful API calls', () => {
    const MOCK_CHARACTER = { name: 'Mock character one' };

    it('returns the retrieved character', async () => {
      get.mockResolvedValueOnce(MOCK_CHARACTER);

      const character = await getCharacterById();
      expect(character).toMatchObject(MOCK_CHARACTER);
    });

    it('returns the retrieved character', async () => {
      get.mockResolvedValueOnce(MOCK_CHARACTER);
      const MOCK_CHARACTER_ID = 1984;

      await getCharacterById(MOCK_CHARACTER_ID);
      expect(get).toHaveBeenLastCalledWith(expect.stringContaining(`${MOCK_CHARACTER_ID}`));
    });
  });

  describe('getCharactersAll', () => {
    // getCharactersAll was able to call the API, so the data came back fine.
    describe('successful API call', () => {
      const MOCK_CHARACTER_ARRAY = [
        { name: 'Mock character one' },
        { name: 'Mock character two' },
      ];

      it('returns an array of characters', async () => {
        get.mockResolvedValueOnce(MOCK_CHARACTER_ARRAY);

        const characters = await getCharactersAll();
        expect(characters).toEqual(expect.arrayContaining(MOCK_CHARACTER_ARRAY));
      });
    });

    // getCharactersAll wasn't able to access the API, so got an error message
    describe('unsuccessful API call', () => {
      let characters;
      const MOCK_ERROR = 'Unable to get all characters!';
      beforeAll(async () => {
        get.mockImplementation(() => { throw new Error(MOCK_ERROR); });
        characters = await getCharactersAll();
      });
      it('returns an empty array when errors are thrown', () => {
        expect(characters).toMatchObject([]);
      });
      it('logs an error message when an error is thrown', async () => {
        expect(console.error).toHaveBeenCalledWith(expect.stringContaining(MOCK_ERROR));
      });
    });
  });

  describe('Unsuccessful API calls', () => {
    let character;
    const MOCK_ERROR = 'Unable to get characters!';

    beforeAll(async () => {
      get.mockImplementation(() => { throw new Error(MOCK_ERROR); });
      character = await getCharacterById();
    });

    it('returns an empty array when errors are thrown', () => {
      expect(character).toMatchObject([]);
    });

    it('logs a message when an error is thrown', () => {
      expect(console.error).toHaveBeenCalledWith(expect.stringContaining(MOCK_ERROR));
    });
  });
});
