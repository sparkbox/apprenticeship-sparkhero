import { getFilteredCharactersByAlignment } from '../utilities/characterFilters';

export function bindCharacterFilterRole(characters, fn) {
  document.querySelectorAll('input[name="role"]').forEach((input) => {
    input.addEventListener('change', () => {
      fn(input.getAttribute('id'), characters);
    });
  });
}

export function getSelectedFilterRole(value, characters) {
  switch (value) {
    case 'hero':
      return getFilteredCharactersByAlignment(characters, 'good');
    case 'villain':
      return getFilteredCharactersByAlignment(characters, 'bad');
    default:
      return characters;
  }
}
