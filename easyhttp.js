// ES5 Object-Oriented Library - We use Prototypes instead of classes

function easyHTTP() {
  this.http = new XMLHttpRequest(); 
}

// Make an HTTP GET request
easyHTTP.prototype.get = function(url) {
  this.http.open('GET', url, true);

  this.http.onload = function() {
      if(this.http.status === 200) {
        console.log(this.http.responseText);
      }
  }

  this.http.send();
}


// Make an HTTP POST request

// Make an HTTP PUT request

// Make an HTTP DELETE request