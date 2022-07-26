function create(words) {
  //create <div>
  // create <p>
  //set <p> content
  //configure <p> to be hidden (display:none);
  // add <p> to <div>
  //add <div> to page
  // configure <div> eventListener

  let content = document.getElementById('content');
  content.addEventListener('click', reveal);
  for (let word of words) {
    let div = document.createElement('div');
    let para = document.createElement('p');
    para.textContent = word;
    para.style.display = 'none';
    div.appendChild(para);
    content.appendChild(div);
  }
  function reveal(e) {
    if (e.target.tagName == 'DIV' && e.target !== content) {
      e.target.children[0].style.display = '';
    }
  }
}
