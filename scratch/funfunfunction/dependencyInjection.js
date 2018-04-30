/*uses the fetch function from the window object, therefore open with a browser 
or stub the browser with mocha

TODO: use the catapi try using the id 'brl': http://thecatapi.com/api/images/get?image_id=brl

install mocha:
$ sudo npm install -g mocha

running the example: 
$ mocha dependencyInjection.js

*/
const assert = require('assert');

function getAnimals(fetch, id) {
	return fetch('http://api.animalfarmgame.com/animals/' + id)
		.then(response => response.json())
		.then(data => data.results[0])
};

describe('getAnimals', () => {
	it('calls fetch with the correct url', () => {
		const fakeFetch = url => {
			assert(
				url === 'http://api.animalfarmgame.com/animals/123'
			)
			return new Promise(function(resolve) {

			})
		}
		getAnimals(fakeFetch, 123)
	})

	it('parsed the response of fetch correctly', (done) => {
		const fakeFetch = url => {
			return Promise.resolve({
				json: () => Promise.resolve({
					results: [
						{
							name: 'fluffykins',
							type: 'robotdragon'
						}
					]
				})				
			})
		}
		getAnimals(fakeFetch, 12345)
			.then(result => {
				assert(result.name === 'fluffykins')
				done()
			})
			.catch(() => {})
	})
});