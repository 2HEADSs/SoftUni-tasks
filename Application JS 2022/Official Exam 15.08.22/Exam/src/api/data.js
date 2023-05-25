import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;


export async function getAllShoes() {
    return api.get('/data/shoes?sortBy=_createdOn%20desc')
};

export async function getCurrentShoe(id) {
    return api.get(`/data/shoes/${id}`)
};


export async function createPost(shoe) {
    return api.post(`/data/shoes`, shoe)
};

export async function editShoe(id, shoe) {
    return api.put(`/data/shoes/${id}`, shoe)
};

export async function deleteShoeById(id) {
    return api.del(`/data/shoes/${id}`)
};

export async function searchCurrentData(query) {

    return api.get(`/data/shoes?where=brand%20LIKE%20%22${query}%22`)

}