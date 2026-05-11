// Creating a new Promise object then take 2 callbacks
let PromiseObject = new Promise((resolve, reject) => {
  //let condition = true;
  let condition = false
  if (condition) {
    resolve('Promise is resolved successfully')
  } else {
    reject('Promise is rejected')
  }
})

PromiseObject.then(
  message => {
    document.getElementById('displayPromise').innerHTML = message
    console.log(message)
  },
  Err => {
    document.getElementById('displayPromise').innerHTML = Err
    console.log(Err)
  }
)

//Creating a zoo ticket booking system using Promise
function bookTicket (name, age) {
  return new Promise((bookingResolve, bookingReject) => {
    if (age >= 18) {
      bookingResolve(
        'Congratulations ' + name + ' You Can Enjoy Our RollerCoaster Ride'
      )
    } else {
      bookingReject(
        "' Sorry '" +
          name +
          " You are Under 18 So you Can't enjoy our rollercoaster Ride "
      )
    }
  })
}
bookTicket('Huzaifa', 12).then(
  rider => {
    document.getElementById('displayPromise').innerHTML = rider
  },
  under18 => {
    document.getElementById('displayPromise').innerHTML = under18
  }
)
// nested promise chainging
function fname (name) {
  return Promise.resolve(name)
}
function age (value) {
  return Promise.resolve(value + ' is 30 years old')
}
function status (status) {
  return Promise.resolve(status + 'and you are a Web Developer')
}
fname('hiba')
  .then(name => {
    return age(name)
  })
  .then(age => {
    return status(age)
  })
  .then(status => {
    document.getElementById('displayChainingPromise').innerHTML = status
  })

// Promise chaining
function add (a, b) {
  return Promise.resolve(a + b)
}
function multiply (value) {
  return Promise.resolve(value * 2)
}
function divide (value) {
  return Promise.resolve(value / 2)
}
add(5, 10)
  .then(sum => {
    return multiply(sum)
  })
  .then(product => {
    return divide(product)
  })
  .then(result => {
    document.getElementById('displayChainingPromiseMathematical').innerHTML =
      'The final result is: ' + result
  })

// Promise with profit calculation
function calculateProfit (cost, sell) {
  return new Promise((resolve, reject) => {
    if (typeof cost === 'number' && typeof sell === 'number') {
      const profit = sell - cost
      resolve(profit)
    } else {
      reject('Error: Both cost and sell should be numbers.')
    }
  })
}
calculateProfit(100, 500).then(
  (profit) => {
    document.getElementById('displayProfit').innerHTML = 'Profit: ' + profit;
  },
  (error) => {
    document.getElementById('displayProfit').innerHTML = error;
  }
)
