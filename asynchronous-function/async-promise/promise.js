// Creating a new Promise object
let PromiseObject = new Promise((resolve,reject)=>{
    //let condition = true;
    let condition = false;
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
},(Err)=>{
    document.getElementById("displayPromise").innerHTML = Err;
    console.log(Err);
})

    