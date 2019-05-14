import 'whatwg-fetch';

export function newGraph(graph) {
    const options = {
        method: 'POST',
        body: JSON.stringify(graph),
        headers: {

            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "*"
        }
    }
    return fetch('https://eda-api.herokuapp.com/api/graph/', options)
        .then(response => response.json())
}
