// ES5 Object-Oriented Library - We use Prototypes instead of classes

function easyHTTP() {
  this.http = new XMLHttpRequest(); 
}

// Make an HTTP GET request
easyHTTP.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);

  let self = this;
  this.http.onload = function() {
      if(self.http.status === 200) {
        callback(null, self.http.responseText);
      } else {
        callback('Error: ' + self.http.status);
      }
  }

  this.http.send();
}


// Make an HTTP POST request

// Make an HTTP PUT request

// Make an HTTP DELETE request