const promise = new Promise((resolve, reject) => {
	console.log('in promise, not resolved yet');
	setTimeout(() => {
		resolve();
	}, 3000);
});

promise
	.then(() => console.log('finally finished!'))
	.then(() => console.log('i was also ran!!!'))
	.catch(() => console.log('uh oh!!'));