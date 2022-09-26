/**
 * @jest-environment jsdom
 */

import { getSelectedFilterPublisher } from './publisher.js';

// tests for returning filtered data based on checkbox checked
describe('publisher function tests', () => {
  // mocking the checkboxes for publisher
  beforeEach(() => {
    // mocking list for checkboxes
    document.body.innerHTML = `
       <div id="hero-filter-publisher" class="toolbar-utility">
          <input type="checkbox" id="dc" name="dc" value="DC Comics" checked>
          <input type="checkbox" id="marvel" name="marvel" value="Marvel Comics" checked>
        </div>`;
  });
  it('should return both publishers by default', () => {
    // both publishers are checked by default, so we do not change this state
    const allPublishers = ['DC Comics', 'Marvel Comics'];
    // it will return characters with either publisher in an Array
    expect(getSelectedFilterPublisher()).toStrictEqual(allPublishers);
  });

  it('should return DC Comics when Marvel is unchecked', () => {
    // this is the source for clicking/un-clicking I used: https://peshmerge.io/how-to-check-uncheck-all-checkboxes-on-a-web-page-using-vanilla-javascript/
    // Marvel is checked by default so another click will uncheck it
    document.querySelectorAll("input[id='marvel']:checked").forEach((element) => {
      element.click();
    });
    // set allPublishers to DC so only characters with DC publisher are returned
    const allPublishers = ['DC Comics'];
    expect(getSelectedFilterPublisher()).toStrictEqual(allPublishers);
  });

  it('should return Marvel Comics when DC is unchecked', () => {
    // DC is checked by default so another click will uncheck it
    document.querySelectorAll("input[id='dc']:checked").forEach((element) => {
      element.click();
    });
    const allPublishers = ['Marvel Comics'];
    expect(getSelectedFilterPublisher()).toStrictEqual(allPublishers);
  });

  it('should return no publishers when both are unchecked', () => {
    // both are checked by default, so clicking again unchecks them
    document.querySelectorAll("input[type='checkbox']:checked").forEach((element) => {
      element.click();
    });
    // set allPublishers to an empty array, no characters are returned as they all have publishers.
    const allPublishers = [];
    expect(getSelectedFilterPublisher()).toStrictEqual(allPublishers);
  });
});
