// Creating a new Promise object
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
  (rider) => {
    document.getElementById('displayPromise').innerHTML = rider
  },
  (under18) => {
    document.getElementById('displayPromise').innerHTML = under18
  }
)
// nested promise
function fname (name) {
  return Promise.resolve(name)
}
function age (value) {
  return Promise.resolve(value + ' is years old')
}
function status (status) {
  return Promise.resolve(status + 'and you are single')
}
// promise chaining
fname('hiba')
  .then(name => {
    return age(name);
  })
  .then((age) => {
    return status(age);
  })
  .then((status) => {
    document.getElementById('displayChainingPromise').innerHTML = status;
  })
