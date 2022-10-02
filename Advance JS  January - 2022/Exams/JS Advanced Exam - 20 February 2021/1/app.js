function solve() {
   let createButton = document.getElementsByClassName('btn create')[0]
   let authorInput = document.getElementById('creator');
   let titleInput = document.getElementById('title');
   let categoryInput = document.getElementById('category');
   let contentInput = document.getElementById('content');

   createButton.addEventListener('click', create);

   function create(e) {

      e.preventDefault();

      let article = document.createElement('article');

      let h1 = document.createElement('h1');
      h1.textContent = titleInput.value;

      let categoryP = document.createElement('p');
      let firstStrong = document.createElement('strong');
      firstStrong.textContent = categoryInput.value;
      categoryP.textContent = 'Category:'
      categoryP.appendChild(firstStrong);

      let creatorP = document.createElement('p');
      let secondStrong = document.createElement('strong');
      secondStrong.textContent = authorInput.value;
      creatorP.textContent = 'Creator:';
      creatorP.appendChild(secondStrong);

      let textP = document.createElement('p');
      textP.textContent = contentInput.value;

      let divBtns = document.createElement('div');
      divBtns.classList = 'buttons'

      let deleteBtn = document.createElement('button');
      deleteBtn.classList = 'btn delete';
      deleteBtn.textContent = 'Delete';

      let archiveBtn = document.createElement('button');
      archiveBtn.classList = 'btn archive';
      archiveBtn.textContent = 'Archive';

      divBtns.appendChild(deleteBtn);
      divBtns.appendChild(archiveBtn);

      article.appendChild(h1);
      article.appendChild(categoryP);
      article.appendChild(creatorP);
      article.appendChild(textP);
      article.appendChild(divBtns);

      let main = document.querySelector('main section');
      main.appendChild(article)

      titleInput.value = '';
      categoryInput.value = '';
      authorInput.value = '';
      contentInput.value = '';


      deleteBtn.addEventListener('click', deleteData);

      function deleteData() {
         document.querySelector('main section').removeChild(article)
      }

      archiveBtn.addEventListener('click', archive);

      function archive() {
         let olElement = document.querySelector('ol');
         let liElement = document.createElement('li');
         liElement.textContent = h1.textContent;
         olElement.appendChild(liElement)
         console.log(olElement);

         let sorted = Array.from(document.querySelectorAll('li')).sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(li => olElement.appendChild(li))

         main.removeChild(article)
      }
   }
}
// solve()
