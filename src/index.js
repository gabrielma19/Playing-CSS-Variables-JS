initialize(handleControls);

function handleControls() {
  const selectors = '.controls input';
  let inputs = document.querySelectorAll(selectors);
  let root = document.documentElement;

  Array
    .from(inputs)
    .forEach(input => {
      input.addEventListener('change', () => handleUpdate(input));
      input.addEventListener('mousemove', () => handleUpdate(input));
    });

  function handleUpdate(input) {
    let measurement = input.dataset.sizing || '';
    root.style.setProperty(`--${input.name}`, input.value + measurement);
  }
}
