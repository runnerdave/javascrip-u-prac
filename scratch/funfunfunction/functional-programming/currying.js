//requires lodash:
//npm install lodash
var _ = require('lodash');

// function without currying
let dragon = (name, size, element) =>
	name + ' is a ' +
	size + ' dragon that breathes ' + 
	element + '!';

console.log(dragon('fluffykins', 'tiny', 'lightning'));

// currying version
let dragonCurrying = 
	name =>
		size =>
			element =>
				name + ' is a ' +
				size + ' dragon that breathes ' +
				element + '!';

console.log(dragonCurrying('fluffykins')('tiny')('lightning'));

let fluffykinsDragon = dragonCurrying('fluffykins')
let tinyDragon = fluffykinsDragon('tiny')

console.log(tinyDragon('lightning'))

//curry the function with lodash
dragon = _.curry(dragon);
console.log(dragon('fluffykins')('tiny')('lightning'));