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
http.get('https://jsonplaceholder.typicode.com/posts/1',  function(err, posts) {
  if(err){
    console.log(err);
  } else {
    console.log(posts);
  }
});