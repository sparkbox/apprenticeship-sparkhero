/**
 * @jest-environment jsdom
*/

import { getSelectedFilterRole } from './role';

describe('role.js', () => {
  describe('getSelectedFilterRole()', () => {
    it('Return the "good" alignment when selecting the hero button', () => {
      document.body.innerHTML = `
        <div id="hero-filter-role" class="toolbar-utility">
          <h3 class="toolbar-utility__header">Role</h3>
          <input type="radio" id="all" name="role" value="all">
          <label for="all">All</label>
          <input type="radio" id="hero" name="role" value="good" checked>
          <label for="hero">Hero</label>
          <input type="radio" id="villain" name="role" value="bad">
          <label for="villain">Villain</label>
        </div>
      `;

      expect(getSelectedFilterRole()).toEqual('good');
    });

    it('Return the "bad" alignment when selecting the villain button', () => {
      document.body.innerHTML = `
        <div id="hero-filter-role" class="toolbar-utility">
          <h3 class="toolbar-utility__header">Role</h3>
          <input type="radio" id="all" name="role" value="all">
          <label for="all">All</label>
          <input type="radio" id="hero" name="role" value="good">
          <label for="hero">Hero</label>
          <input type="radio" id="villain" name="role" value="bad" checked>
          <label for="villain">Villain</label>
        </div>
      `;

      expect(getSelectedFilterRole()).toEqual('bad');
    });

    it('Return "all" when selecting the filter "all" button', () => {
      document.body.innerHTML = `
        <div id="hero-filter-role" class="toolbar-utility">
          <h3 class="toolbar-utility__header">Role</h3>
          <input type="radio" id="all" name="role" value="all" checked>
          <label for="all">All</label>
          <input type="radio" id="hero" name="role" value="good">
          <label for="hero">Hero</label>
          <input type="radio" id="villain" name="role" value="bad">
          <label for="villain">Villain</label>
        </div>
      `;

      expect(getSelectedFilterRole()).toEqual('all');
    });
  });
});
