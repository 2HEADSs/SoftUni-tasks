import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;


export async function getAll() {
    return api.get('/data/albums?sortBy=_createdOn%20desc&distinct=name')
};

export async function getCurrentData(id) {
    return api.get(`/data/albums/${id}`)
};

// export async function getMyData(userId) {
//     return api.get(`/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc}`)
// };

export async function createData(data) {
    return api.post(`/data/albums`, data)
};

export async function editData(id, book) {
    return api.put(`/data/albums/${id}`, book)
};

export async function deleteDataById(id){
    return api.del(`/data/albums/${id}`)
};

export async function searchCurrentData(query) {

    // return ap.get('/data/books?where=' + encodeURIComponent(`title LIKE "${query}"`))
    return api.get(`/data/albums?where=${query}`)


}
