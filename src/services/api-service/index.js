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