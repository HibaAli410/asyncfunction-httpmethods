// Creating a new Promise object
let PromiseObject = new Promise((resolve,reject)=>{
    let condition = true;
    if(condition){
        resolve("Promise is resolved successfully");
    }
    else{
        reject("Promise is rejected");
    }
})

PromiseObject.then((message)=>{
    document.getElementById("displayPromise").innerHTML = message;
    console.log(message);
})
    