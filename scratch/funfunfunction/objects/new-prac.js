/*
new keword practice, from: https://youtu.be/Y3zzCY62NYc?list=PL0zVEGEvSaeHBZFy6Q8731rcwk0Gtuxub
*/

function Person(saying) {
	this.saying = saying;
}

Person.prototype.talk = function() {
	console.log('I say:', this.saying);
}

var crockford = new Person('SEMICOLANS!!!1one1');

crockford.talk()

//rebuilding the 'new' function to understand what is doing
//the function will be called 'spawn'

function spawn(constructor) {
	var obj = {}
	Object.setPrototypeOf(obj, constructor.prototype);
	var argsArray = Array.prototype.slice.apply(arguments);
	constructor.apply(obj, argsArray.slice(1));
	return obj;
}

var crockford = spawn(Person, 'SEMICOLANS!!!1one1');
crockford.talk();