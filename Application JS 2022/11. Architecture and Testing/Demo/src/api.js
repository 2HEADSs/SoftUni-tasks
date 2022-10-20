
import { get, post } from "./request.js";
const baseUrl = 'http://localhost:3030';
const recipeUrl = `${baseUrl}/data/recipes`;
const loginUrl = `${baseUrl}/users/login`
export const getRecipes = () => get(recipeUrl)
//same as upper 
// export const getRecipes = () =>  fetch(recipeUrl).then(res => res.json())


export const createRecipe = (recipeData) => {
    return post(recipeUrl, recipeData) 
}

export const login = (email, password) =>
    post(loginUrl, { email, password })
