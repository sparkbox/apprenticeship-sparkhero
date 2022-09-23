export function bindCharacterFilterRole(fn) {
  const inputs = Array.from(document.querySelectorAll('input[name="role"]'));
  inputs.forEach((input) => {
    input.addEventListener('change', () => {
      fn();
    });
  });
}

export function getSelectedFilterRole() {
  const inputs = Array.from(document.querySelectorAll('input[name="role"]'));
  const { defaultValue: selectedFilterRole } = inputs.find((input) => input.checked === true);
  return selectedFilterRole;
}
