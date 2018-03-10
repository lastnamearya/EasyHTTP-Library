const http = new easyHTTP;

// Get posts
// http.get('https://jsonplaceholder.typicode.com/posts1',  function(err, posts) {
//   if(err){
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

// Get Single Request
// http.get('https://jsonplaceholder.typicode.com/posts/1',  function(err, post) {
//   if(err){
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Create Data
const data = {
  title: 'Custome Post',
  body: 'This is a custom post'
};

// // Create Post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
//   if(err){
//       console.log(err);
//     } else {
//       console.log(post);
//     }
// });

// Update Post
http.put('https://jsonplaceholder.typicode.com/posts/2', data,  function(err, post) {
  if(err){
    console.log(err);
  } else {
    console.log(post);
  } 
});