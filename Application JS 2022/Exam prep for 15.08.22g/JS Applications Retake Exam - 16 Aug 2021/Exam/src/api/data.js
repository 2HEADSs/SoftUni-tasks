import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;


export async function getAllForHomePage() {
    return api.get('/data/games?sortBy=_createdOn%20desc&distinct=category')
};
export async function getAll() {
    return api.get('/data/games?sortBy=_createdOn%20desc')
};

export async function getCurrentData(id) {
    return api.get(`/data/games/${id}`)
};

export async function createById(game) {
    return api.post(`/data/games`, game)
};

export async function editData(id, game) {
    return api.put(`/data/games/${id}`, game)
};

export async function deleteDataById(id){
    return api.del(`/data/games/${id}`)
};

export async function getCurrentComments(gameId) {
    return api.get(`/data/comments?where=gameId%3D%22${gameId}%22`)
};

export async function makeComment(gameId,comment) {
    return api.post(`/data/comments`,{gameId,comment})
};

