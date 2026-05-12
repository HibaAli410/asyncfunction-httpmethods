// Async Function always return a Promise
//await is wait a promise to excute untill Promise is in resolved or rejected state

// first 
async function orderFood () {
  let waiting = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let orderPlace = true;
        if(orderPlace){
            resolve('Order is Placed');
        }
        else {
            reject('Order is not Placed');
        }

    },4000)
  })
  document.getElementById('displayAsyncawaitFunction').innerHTML = 'Ordering food...' + await waiting;
  return waiting
}
orderFood();
// Second 
function first(){
  let color1 = "#D49387";
  let fontColor = "white";
  let colorPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      document.getElementById('colorBox').style.backgroundColor = color1;
      document.getElementById('colorBox').style.color = fontColor;
      resolve(color1);
    },3000)
  })
  return colorPromise;
}
function second(){
  let color2 = "green";
  let colorPromise = new Promise((res,rej)=>{
    setTimeout(()=>{
      document.getElementById('colorBox').style.backgroundColor = color2;
      res(color2);
    },3000)
  })
  return colorPromise;
}
function third(){
  let color3 = "#A9BBE0";
  let colorPromise = new Promise((res,rej)=>{
    setTimeout(()=>{
      document.getElementById('colorBox').style.backgroundColor = color3;
      res(color3);
    },3000)
  })
  return colorPromise;
}
async function decendingOrder(){
  let one = await first();
  let two = await second();
  let three = await third();

}  
decendingOrder();
