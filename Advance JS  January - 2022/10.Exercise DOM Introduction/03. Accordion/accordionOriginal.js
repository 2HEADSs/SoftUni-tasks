function toggle() {
  let button = document.querySelector('.button');
  let text = document.querySelector('#extra');
  if (button.textContent == 'More') {
    button.textContent = 'Less';
    text.style.display = 'block';
  } else {
    button.textContent = 'More';
    text.style.display = 'none';
  }
  //   if ((button.textContent = 'More')) {
  //     //       text.style.display = 'none'
  //   }
  //   let text = document.querySelector('#extra');
  //   if(text.style.display === 'none'){
  //       text.style.display = 'block';
  //   } else {
  //       text.style.display = 'none'
  //   }
}
