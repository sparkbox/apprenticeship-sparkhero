import { getSelectedFilterRole } from './role';

const characters = [
  {
    name: 'person1',
    biography: {
      alignment: 'good',
    },
  },
  {
    name: 'person2',
    biography: {
      alignment: 'neutral',
    },
  },
  {
    name: 'person3',
    biography: {
      alignment: 'bad',
    },
  },
];

describe('role.js', () => {
  describe('getSelectedFilterRole()', () => {
    it('Return all heros', () => {
      const filteredList = getSelectedFilterRole('hero', characters);
      const expectedOutput = [
        {
          name: 'person1',
          biography: {
            alignment: 'good',
          },
        },
      ];
      expect(filteredList).toEqual(expectedOutput);
    });

    it('Return all villains', () => {
      const filteredList = getSelectedFilterRole('villain', characters);
      const expectedOutput = [
        {
          name: 'person3',
          biography: {
            alignment: 'bad',
          },
        },
      ];
      expect(filteredList).toEqual(expectedOutput);
    });

    it('Return everyone', () => {
      const filteredList = getSelectedFilterRole('all', characters);
      expect(filteredList).toEqual(characters);
    });
  });
});
