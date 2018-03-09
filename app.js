const http = new easyHTTP;

// Get posts
const posts = http.get('https://jsonplaceholder.typicode.com/posts');

console.log(posts);