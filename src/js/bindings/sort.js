export function bindCharacterSort(fn) {
  const select = document.querySelector('#hero-filter-sort select');
  select.addEventListener('change', () => {
    fn();
  });
}

// getSelectedSortOption returns the currently selected option from the dropdown
export function getSelectedSortOption() {
  const select = document.querySelector('#hero-filter-sort select');
  const selectedOption = select.options[select.selectedIndex].value;
  return selectedOption;
}
