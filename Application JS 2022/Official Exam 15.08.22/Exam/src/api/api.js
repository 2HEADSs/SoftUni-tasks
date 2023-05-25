import { getUser, setUser, clearUser } from "../util.js";

const hostUrl = 'http://localhost:3030';

async function request(url, options) {
    try {
        const respone = await fetch(`${hostUrl}${url}`, options);

        if (respone.ok == false) {
            const error = await respone.json();
            throw new Error(error.message)
        };

        if (respone.status == 204) {
            return respone
        } else {
            return respone.json()
        }

    } catch (err) {
        alert(err.message);
        throw err;
    }
};


function createOptions(method = 'get', data) {
    const options = {
        method,
        headers: {}
    };

    if(data != undefined){
        options.headers['Content-Type']='application.json';
        options.body = JSON.stringify(data)
    };

    const user = getUser();
    if(user){
        options.headers['X-Authorization'] = user.token
    };

    return options;
};

export async function get(url){
    return request(url, createOptions())
};

export async function post(url, data){
    return request(url, createOptions('post', data))
};

export async function put(url, data){
    return request(url, createOptions('put', data))
};

export async function del(url){
    return request(url, createOptions('delete'))
};

export async function login(email, password){
    const result = await post('/users/login',{email, password});
    const user = {
        email: result.email,
        id: result._id,
        token: result.accessToken,
    };

    setUser(user)
};

export async function register(email, password){
    const result = await post('/users/register',{email, password});
    const user = {
        email: result.email,
        id: result._id,
        token: result.accessToken,
    };

    setUser(user)
};

export async function logout(){
    get('/users/logout');
    clearUser()
}