const http = new easyHTTP;

// Get posts
http.get('https://jsonplaceholder.typicode.com/posts',  function(response) {
  console.log(response);
});