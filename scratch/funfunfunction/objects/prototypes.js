/*
from the video about prototypes: https://youtu.be/YkoelSTUy7A
*/

//separator utility
const separator = function(number) {
	console.log(`\r\n############ Example number ${number} ##############`)
}

separator(1)
//shows how inheritance works with prototypes
function talk() {
	//console.log(this) uncomment to see what this actually does
	console.log(this.sound)
}
let animal = {
	talk
}
let cat = {
	sound: 'meow!'
}
let dog = {
	sound: 'woof!'
}
let prarieDog = {
	howl: function() {
		console.log(this.sound.toUpperCase())
	}
}
Object.setPrototypeOf(cat, animal)
cat.talk()
Object.setPrototypeOf(dog, animal)
dog.talk()
Object.setPrototypeOf(prarieDog, dog)
prarieDog.howl()