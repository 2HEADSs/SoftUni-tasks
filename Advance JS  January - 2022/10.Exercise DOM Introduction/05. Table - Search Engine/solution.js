function solve() {
  document.querySelector('#searchBtn').addEventListener('click', onClick);

  function onClick() {
    let input = document.getElementById('searchField').value;
    let rows = document.querySelectorAll('tbody tr');
    for(let row of rows){
        if(row.textContent.includes(input)){
            row.className = 'select'
        }else {
            row.classList.remove('select')
        }
    }
  }
}
