import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;


export async function getAll() {
    return api.get('/data/theaters?sortBy=_createdOn%20desc&distinct=title')
};

export async function getCurrentData(id) {
    return api.get(`/data/theaters/${id}`)
};
// not ready
export async function getMyData(userId) {
    return api.get(`/data/theaters?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
};

export async function create(event) {
    return api.post(`/data/theaters`, event)
};

export async function editData(id, event) {
    return api.put(`/data/theaters/${id}`, event)
};

export async function deleteDataById(id){
    return api.del(`/data/theaters/${id}`)
};

export async function makeLike(theaterId) {
    return api.post(`/data/likes`, {theaterId})
};

export async function getAllLikesById(theaterId) {
    return api.get(`/data/likes?where=theaterId%3D%22${theaterId}%22&distinct=_ownerId&count`)
};

export async function getLikeByIdByUser(theaterId, userId) {
    return api.get(`/data/likes?where=theaterId%3D%22${theaterId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
};