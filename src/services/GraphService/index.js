import 'whatwg-fetch';

export function newGraph(graph) {
    const options = {
        method: 'POST',
        body: JSON.stringify(graph),
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return fetch('https://eda-api.herokuapp.com/api/graph/', options)
        .then(response => response.json())
}
