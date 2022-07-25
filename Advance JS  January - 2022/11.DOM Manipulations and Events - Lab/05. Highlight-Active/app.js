function focused() {
//   let fields = Array.from(document.getElementsByTagName('input'));

//   for (let field of fields) {
//     field.addEventListener('focus', onFocus);
//     field.addEventListener('blur', onBlur);
//   }

//   function onFocus(e) {
//     e.target.parentNode.className = 'focused';
//   }
//   function onBlur(e) {
//     e.target.parentNode.className = '';
//   }

  //SECOND WAY

    Array.from(document.getElementsByTagName('input'))
    .forEach(f => {
        f.addEventListener('focus', onFocus);
        f.addEventListener('blur', onBlur);
    })
    function onFocus(e) {
      e.target.parentNode.className = 'focused';
    }
    function onBlur(e) {
      e.target.parentNode.className = '';
    }
}
