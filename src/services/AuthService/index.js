//Authenticate User
import 'whatwg-fetch';

export function loginUser(credentials) {
    const options = {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(credentials)
    }
    return fetch('https://eda-api.herokuapp.com/api/auth/login/', options)
        .then(response => response.json())
}