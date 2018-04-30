//you need to install npm-fetch: $ npm install node-fetch

const fetch = require('node-fetch');

const url = "https://jsonplaceholder.typicode.com/posts/";

fetch(url)
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(error => console.log(error));