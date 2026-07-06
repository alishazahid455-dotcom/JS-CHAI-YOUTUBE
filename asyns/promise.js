/*A Promise is a JavaScript object that represents the eventual completion (success) or failure of 
an asynchronous operation and its resulting value.*/

const promise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Login Successful");
    } else {
        reject("Login Failed");
    }
});

promise
    .then((msg) => {
        console.log(msg);
    })
    .catch((err) => {
        console.log(err);
    });

    //.then() Success handle karta hai.
    //.catch()Error handle karta hai.
    //.finally() Ye hamesha chalta hai, chahe Promise resolve ho ya reject.

    fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
  /*fetch() is a built-in JavaScript function used to make HTTP requests. 
  It returns a Promise, so it is commonly used with .then(), .catch(), or async/await.*/

