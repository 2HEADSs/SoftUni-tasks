function create(words) {
  //create <div>
  // create <p>
  //set <p> content
  //configure <p> to be hidden (display:none);
  // add <p> to <div>
  //add <div> to page
  // configure <div> eventListener

  for (let el of words) {
    let content = document.getElementById('content');
    let div = document.createElement('div');
    let paragraph = document.createElement('p');
    paragraph.textContent = el;
    div.appendChild(paragraph);
    content.appendChild(div);
    div.addEventListener('click', show);
    paragraph.style.display = 'none';
  }
  function show(e) {
 e.target.children[0].style.display = ''
  }
}
