class Mammal {
	constructor(sound) {
		this.sound = sound;
	}

	talk() {
		return this.sound;
	}
}

class Dog extends Mammal {
	constructor() {
		super('woof');
	}
}

const fluffykins = new Dog();
const bark = fluffykins.talk();

const sout = (function() {
	console.log(bark);
})()

// sout(); if IFFEs are too complex