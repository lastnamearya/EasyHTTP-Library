/**
 * EasyHTTP Library
 * Library for making HTTP requests
 * 
 * @version 3.0.0
 * @author Jigyasu Arya ~ lastnamearya 
 * @license MIT
 * 
 */

class EasyHTTP {
   
  // Make an HTTP GET Request
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }

  // Make HTTP POST Request
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
    .then(res => res.json())
    .then(data => resolve(data))
    .catch(err => reject(err));
    });
  }

  // Make HTTP PUT Request
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
    .then(res => res.json())
    .then(data => resolve(data))
    .catch(err => reject(err));
    });
  }

  // Make an HTTP Delete Request
  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json'
        }
      })
    .then(res => res.json())
    .then(() => resolve('Resource Deleted...'))
    .catch(err => reject(err));
    });
  }
 }