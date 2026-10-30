function abc (id) {
  id = '12345'
  console.log(id)
}

// function edf (callme) {
//   setTimeout(() => {
//     callme()
//   }, 6000)
// }

// function egf () {}
// function hello () {}

// edf(egf)

// function showsomeheadings (username) {
//   let h3 = document.createElement('h3')
//   h3.innerHTML = username
//   document.body.appendChild(h3)
// }

// showsomeheadings('munnaza')

// function placeorder (backcall) {
//   setTimeout(() => {
//     alert('do you confirm')
//     backcall('yourorder is place')
//   }, 5000)

//   let span = document.createElement('span')
//   span.innerHTML = 'hello'
//   document.body.appendChild(span)
// }
// placeorder(confirmorder)

// function confirmorder (response) {
//   let h3 = document.createElement('h3')
//   h3.innerHTML = response
//   document.body.appendChild(h3)
// }
// confirmorder('your order is ready')

function placeorder (msg, backcall) {
  setTimeout(() => {
    alert('do you confirm')
    backcall(msg)
  }, 5000)

  let span = document.createElement('span')
  span.innerHTML = 'hello'
  document.body.appendChild(span)
}
// calling
placeorder('your order is placed', confirmorder)

function confirmorder (response) {
  let h3 = document.createElement('h3')
  h3.innerHTML = response
  document.body.appendChild(h3)
}
