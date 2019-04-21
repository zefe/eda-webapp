import 'whatwg-fetch';

export function signUp(user) {
    const options = {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return fetch('http://localhost:3000/api/user/', options)
        .then(response => response.json())
}

export function getUsers() {
    return fetch('http://localhost:3000/api/user/')
        .then(response => response.json())
}
//Get user details
export function getUser(id, ) {
    return fetch(`http://localhost:3000/api/user/${id}`)
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
    return fetch(`http://localhost:3000/api/user/${id}`, options)
        .then(response => response.json())
}