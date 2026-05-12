// Async Function always return a Promise
//await is  pause the execution untill Promise is in resolved or rejected state

// first
async function orderFood() {
  let waiting = new Promise((resolve, reject) => {
    setTimeout(() => {
      let orderPlace = true
      if (orderPlace) {
        resolve('Order is Placed')
      } else {
        reject('Order is not Placed')
      }
    }, 4000)
  })
  document.getElementById('displayAsyncawaitFunction').innerHTML =
    'Ordering food...' + (await waiting)
  return waiting
}
orderFood()
// Second
function first() {
  let color1 = '#D49387'
  let fontColor = 'white'
  let colorPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      document.getElementById('colorBox').style.backgroundColor = color1
      document.getElementById('colorBox').style.color = fontColor
      document.getElementById('colorBox').innerHTML = 'Color is Changed to Red Function One'
      resolve(color1)
    }, 3000)
  })
  return colorPromise
}
function second() {
  let color2 = 'green'
  let colorPromise = new Promise((res, rej) => {
    setTimeout(() => {
      document.getElementById('colorBox').style.backgroundColor = color2
      document.getElementById('colorBox').style.color = 'white'
      document.getElementById('colorBox').innerHTML = 'Color is Changed to Green Function Two'
      res(color2)
    }, 3000)
  })
  return colorPromise
}
function third() {
  let color3 = '#A9BBE0'
  let colorPromise = new Promise((res, rej) => {
    setTimeout(() => {
      document.getElementById('colorBox').style.backgroundColor = color3
      document.getElementById('colorBox').style.color = 'white'
      document.getElementById('colorBox').innerHTML = 'Color is Changed to Blue Function Three'
      res(color3)
    }, 3000)
  })
  return colorPromise
}
async function decendingOrder() {
  let one = await first()
  let two = await second()
  let three = await third()
}
decendingOrder()

// 3rd One
function bookTaxi() {
  let booking = new Promise((resolve, reject) => {
    setTimeout(() => {
      let bookingcondition = true
      document.getElementById('bookingTaxi').innerHTML =
        'Please Wait for Taxi to be Booked'
      if (bookingcondition) {
        let booking = (document.getElementById('bookingTaxi').innerHTML =
          'Taxi is Booked Successfully wait for more Confirmation')
        document.getElementById('bookingTaxi').style.color = 'white'
        document.getElementById('bookingTaxi').style.backgroundColor = 'green'
        resolve(booking)
      } else {
        reject('Taxi is not Booked')
      }
    }, 3000)
  })
}
function bookingAccepted() {
  let accepted = new Promise((resolve, reject) => {
    setTimeout(() => {
      let acceptedCondition = true
      document.getElementById('bookingTaxi').innerHTML =
        'Please Wait for Driver to Accept Your Booking'
      if (acceptedCondition) {
        let bookingAccepted = (document.getElementById(
          'bookingTaxi'
        ).innerHTML = 'Your booking is accepted By Driver Please Wait For Ride')
        document.getElementById('bookingTaxi').style.color = "red"
        document.getElementById('bookingTaxi').style.backgroundColor = "pink"
        resolve(bookingAccepted)
      } else {
        reject('Your booking is not accepted By Driver Please Try Again')
      }
    }, 6000)
  })
}
function taxiArrived() {
  let arrived = new Promise((resolve, reject) => {
    setTimeout(() => {
      let arrivedCondition = true
      document.getElementById('bookingTaxi').innerHTML =
        'Your Taxi almost here...'
      if (arrivedCondition) {
        let bookingAccepted = (document.getElementById(
          'bookingTaxi'
        ).innerHTML = 'Your Taxi is Arrived At Your Location... Please Get In')
        document.getElementById('bookingTaxi').style.color = "white"
        document.getElementById('bookingTaxi').style.backgroundColor = "SlateBlue"
        resolve(bookingAccepted)
      } else {
        reject('We could not find Your Location')
      }
    }, 9000)
  })
}
async function bookingTaxi() {
  let booking = await bookTaxi()
  let acceptes = await bookingAccepted()
  let arrived = await taxiArrived()
}
bookingTaxi()
