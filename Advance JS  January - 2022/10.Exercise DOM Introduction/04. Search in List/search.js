function search() {
  let textForSearch = document.getElementById('searchText').value;
  let towns = Array.from(document.querySelectorAll('#towns li'));
  let matches = 0;
  let result = document.getElementById('result');

  for (let town of towns) {
    if (
      town.textContent.includes(textForSearch) &&
      textForSearch !== '' &&
      textForSearch !== ' '
    ) {
      matches++;
      town.style.decoration = 'underline';
      town.style.fontWeight = 'bold';
    } else {
      town.style.decoration = 'none';
      town.style.fontWeight = 'normal';
    }
  }
  result.textContent = `${matches} matches found`;
}
