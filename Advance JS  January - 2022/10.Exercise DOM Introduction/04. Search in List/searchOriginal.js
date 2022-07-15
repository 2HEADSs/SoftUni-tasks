function search() {
  let userWord = document.getElementById('searchText').value;
  let townsElement = Array.from(document.querySelectorAll('#towns li'));
  let match = document.getElementById('result');

  let count = 0;

  for (let town of townsElement) {
    if (town.textContent.includes(userWord) && userWord !== '') {
      count++;
      town.style.fontWeight = 'bold';
      town.style.decoration = 'underline';
    } 
    else {
      town.style.fontWeight = 'normal';
      town.style.decoration = 'none';
    }
  }
  match.textContent = `${count} matches found`;
}
