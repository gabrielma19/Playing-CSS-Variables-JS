initialize(function () {
  var inputs = document.querySelectorAll('.controls input');



  function handleUpdate(input) {
    //Dataset that contains the unit of measurement of the object
    var measurement = input.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${input.name}`, input.value + measurement);
    console.log(input.name)

  }

  Array.from(inputs).forEach(input => input.addEventListener('change', handleUpdate));
  Array.from(inputs).forEach(input => input.addEventListener('mousemove', handleUpdate));
})
