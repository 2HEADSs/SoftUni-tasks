function getArticleGenerator(articles) {
  let data = articles;

  return () => {
    if (data.length) {
      let container = document.querySelector('#content');
      let article = document.createElement('article');
      let currentText = data.shift();
      article.innerText = currentText;
      container.appendChild(article);
    }
  };
}
