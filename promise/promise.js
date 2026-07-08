const promise = new Promise(function(resolve, reject) {

    let success = true;

    if (success) {
        resolve("Data Loaded Successfully");
    } else {
        reject("Something Went Wrong");
    }

});

promise.then(function(result) {
    console.log(result);
});

promise.catch(function(error) {
    console.log(error);
});
                          //reject 
const promise = new Promise(function(resolve, reject) {

    let success = false;

    if (success) {
        resolve("Data Loaded");
    } else {
        reject("Server Error");
    }

});

promise.then(function(result) {
    console.log(result);
});

promise.catch(function(error) {
    console.log(error);
});
                                        //then 
promise.then(function(data){
    console.log(data);
});
/*A Promise is a JavaScript object that represents the eventual completion
 (success) or failure of an asynchronous operation and its resulting value.*/