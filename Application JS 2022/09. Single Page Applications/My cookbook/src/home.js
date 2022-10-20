const homeSection = document.querySelector('.home');
const divRecipes = homeSection.querySelector('.recipe-list')
export function showHomePage() {
    fetch('http://localhost:3030/jsonstore/cookbook/recipes/')
        .then(res => res.json())
        .then(recipes => {
            renderRecipes(Object.values(recipes))
            homeSection.style.display = 'block'
        })
}
function renderRecipes(recipes) {
    const fragment = document.createDocumentFragment();
    recipes.forEach(element => {
        fragment.appendChild(renderRecipe(element))
    });
    divRecipes.innerHTML = '';
    divRecipes.appendChild(fragment)
}

function renderRecipe(recipe){
    const article = document.createElement('article');
    article.classList.add('preview')
    article.innerHTML = `
    <div class="title">
        <h2>${recipe.name}</h2>
    </div>
    <div class="small">
        <img src="${recipe.img}">
    </div>
`;
return article;
}