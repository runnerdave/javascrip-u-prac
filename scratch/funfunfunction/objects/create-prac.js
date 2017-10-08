/*
creation of objects prac from:
https://youtu.be/CDFN1VatiJA?list=PL0zVEGEvSaeHBZFy6Q8731rcwk0Gtuxub
*/

const dog = {
	sound: 'woof',
	makeSound: function() {
		console.log(this.sound);
	}
}

const homer = Object.create(dog)
homer.sound = 'ehehehe';
homer.makeSound();

//"Creates a new object with the prototype set to a certain object"
console.log('Is Homer a dog?', dog.isPrototypeOf(homer))

//how does create works internally
function objectCreate(proto) {
	const obj = {};
	Object.setPrototypeOf(obj, proto);
	return obj;
}

const homerHomeBaked = objectCreate(dog);
console.log('Is HomerHomeBaked a dog?', dog.isPrototypeOf(homerHomeBaked));

//best practice for usage of the create method is to have an init function as a constructor, 
//this allow chaining

const cat = {
	init: function(sound) {
		this.sound = sound;
		return this;
	},
	makeSound: function() {
		console.log(this.sound);
	}
}

const mark = Object.create(cat).init('meaow');
mark.makeSound();