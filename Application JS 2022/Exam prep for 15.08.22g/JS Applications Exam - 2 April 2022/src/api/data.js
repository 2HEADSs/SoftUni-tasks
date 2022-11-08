import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;


export async function getAllPets() {
    return api.get('/data/pets?sortBy=_createdOn%20desc&distinct=name')
};

export async function getPostById(id) {
    return api.get(`/data/pets/${id}`)
};

export async function getMyPosts(userId) {
    return api.get(`/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
};

export async function createPost(post) {
    return api.post(`/data/pets`, post)
};

export async function editPost(id, post) {
    return api.put(`/data/pets/${id}`, post)
};

export async function deletePostById(id) {
    return api.del(`/data/pets/${id}`)
};


export async function makeDonation(petId) {
    return api.post(`/data/donation`, { petId })
};

export async function getDonationById(petId) {
    return api.get(`/data/donation?where=petId%3D%22${petId}%22&distinct=_ownerId&count`)
};

export async function getDonationByIdByUser(petId, userId) {
    return api.get(`/data/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
};