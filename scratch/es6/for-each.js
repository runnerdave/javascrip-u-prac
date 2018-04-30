//converting a for-loop to a forEach

var posts = [
      { id: 23, title: 'Daily JS News' },
      { id: 52, title: 'Code Refactor City' },
      { id: 105, title: 'The Brightest Ruby' }
    ];
    

function handlePosts() {    
    for (var i = 0; i < posts.length; i++) {
      savePost(posts[i]);
    }
}

function handlePostsForEach() {
	posts.forEach(a => savePost(a));
}

function savePost(post) {
	console.log('post saved!:' + JSON.stringify(post));
}

console.log('before:');
handlePosts();
console.log('\nafter:')
handlePostsForEach();

//processing values

var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];

var index = 0;

function calculateAreas() {
	images.forEach(image => {
		areas[index] = image.height * image.width;
		index++;
	});
}

calculateAreas();

console.log('\nimages:' + JSON.stringify(images));
console.log('\nareas:' + areas);