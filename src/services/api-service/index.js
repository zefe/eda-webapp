import 'whatwg-fetch';

const uri = 'https://eda-api.herokuapp.com/api/user/';
export function signUp(user) {
    const options = {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return fetch(uri, options)
        .then(response => response.json())
}

export function getUsers() {
    return fetch(uri)
        .then(response => response.json())
}
//Get user details
export function getUser(id, ) {
    return fetch(`${uri}${id}`)
        .then(response => response.json())
}
//Update user
export function updateUser(id, user) {
    const options = {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return fetch(`${uri}${id}`, options)
        .then(response => response.json())
}


export function getUserInfo() {
    const options = {
        credentials: 'include'
    }
    return fetch(`${uri}${id}profile`, options)
        .then(response => response.json())
}