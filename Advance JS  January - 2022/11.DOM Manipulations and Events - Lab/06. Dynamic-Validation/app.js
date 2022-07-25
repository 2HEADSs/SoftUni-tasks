function validate() {
  let inputEl = document.getElementById('email');
  inputEl.addEventListener('change', onChange);

  function onChange(e) {
    let pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

    if (pattern.test(e.target.value)) {
      e.target.classList.remove('error');
    } else {
      e.target.classList.add('error');
    }
  }
}
