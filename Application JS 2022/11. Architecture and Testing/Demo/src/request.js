import { getToken } from './auth.js';

function request(method, url, data) {
    let option = {};
    let token = getToken()

    if (method != "GET") {
        option = {
            method,
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        }
    }

    if (method !== 'GET' && token) {
        option.headers['X-Authorization'] = token;
    }

    return fetch(url, option)
        .then(res => res.json())
}

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST')