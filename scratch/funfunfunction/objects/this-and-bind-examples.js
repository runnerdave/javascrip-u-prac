//from: https://www.youtube.com/watch?v=PIkA60I0dKU&index=2&list=PL0zVEGEvSaeHBZFy6Q8731rcwk0Gtuxub

//separator utility
const separator = function(number) {
	console.log(`\r\n############ Example number ${number} ##############`)
}

separator(1)
//function without any 'this'
function talk_1(sound) {
	console.log(sound)
}

talk_1('woof!')

separator(2)
//with this and bind
function talk_2() {
	console.log(this.sound)
}

talk_2() //undefined

separator(3)
//inspecting what the this actually contains -- uncomment to get the node object which is huge
function talk_3() {
	// console.log(this)
}

talk_3()

separator(4)
//'this' needs context
function talk_4() {
	console.log(this.sound)
}
let boromir = {
	sound: 'One does not simply walk into mordor!'
}
let talkBoundToBoromir = talk_4.bind(boromir)
talkBoundToBoromir()

separator(5)
//now an example with an object reference instead, no bind
let talk_5 = function() {
	console.log(this.sound)
}
let boromirSpeaker = {
	speak: talk_5,
	sound: 'One does not simply walk into mordor!'
}
boromirSpeaker.speak()

separator(6)
//same as 5 with bind
//here bind creates another copy of talk but it will always be bound to boromirBlabber
let talk_6 = function() {
	console.log(this.sound)
}
let boromirBlabber = {
	sound: 'One does not simply walk into mordor!'
}
boromirBlabber.speak = talk_6.bind(boromirBlabber)
let blabber =  boromirBlabber.speak
blabber()
talk_6()//undefined, because the function talk_6 is not modified by the binding