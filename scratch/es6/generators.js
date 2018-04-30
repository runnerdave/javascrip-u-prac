function* shopping() {
	// stuff on the sidewalk

	// walking down the sidewalk

	// go into the store with cash
	const stuffFromStore = yield 'cash';

	// salking to laundromat
	const cleanClothes = yield 'laundry';

	// walking back home
	return [stuffFromStore, cleanClothes]
}

// stuff in the store
const gen = shopping();
console.log(gen.next());// leaving our house
console.log(gen.next());// walked into the store
// walking up and down the aisles..
// purchase our stuff

console.log(gen.next('groceries'));