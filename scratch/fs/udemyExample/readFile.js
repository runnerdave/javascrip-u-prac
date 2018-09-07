const fs = require('fs');
const greetSync = fs.readFileSync(__dirname + '/greet.txt', 'utf-8')

console.log(greetSync)

const greetAsync = fs.readFile(__dirname + '/greet.txt', 'utf-8', (error, data) => console.log(data))