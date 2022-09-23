/**
 * @jest-environment jsdom
 */

import { getSelectedSortOption } from './sort';

describe('sort.js', () => {
  describe('getSelectedSortOption', () => {
    beforeEach(() => {
      // mock select & options
      document.body.innerHTML = `
      <div id="hero-filter-sort">
        <select name="sort-by-powerstats" aria-labelledby="sort-select">
          <option value="none" selected>None</option>
          <option value="name">Name</option>
          <option value="intelligence">Intelligence</option>
          <option value="strength">Strength</option>
          <option value="combat">Combat</option>
        </select>
      </div>`;
    });
    it('returns the value of none if an option was not selected or none was selected', () => {
      // should return none (default "none" option selected above)
      const optionNoneSelected = 'none';
      expect(getSelectedSortOption()).toStrictEqual(optionNoneSelected);
    });

    it('returns the value of name if the name option was selected', () => {
      // should return none ("name" option selected instead)
      const optionElement = document.querySelector('#hero-filter-sort select option[value="name"]');
      // "fake" change event so we select the name option
      optionElement.selected = true;
      const optionNameSelected = 'name';
      expect(getSelectedSortOption()).toStrictEqual(optionNameSelected);
    });

    it('returns the value of the powerstat if a powerstat option was selected', () => {
      // should return intelligence/strength/combat (powerstat option selected instead)
      const optionElement = document.querySelector('#hero-filter-sort select option[value="combat"]');
      // "fake" change event so we select the combat powerstat option
      optionElement.selected = true;
      const optionPowerstatSelected = 'combat';
      expect(getSelectedSortOption()).toStrictEqual(optionPowerstatSelected);
    });
  });
});
