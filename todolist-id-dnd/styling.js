const input = document.getElementById('inputid')
const div = document.getElementById('container')
const ul = document.createElement('ul')
input.classList.add(
  'w-96',
  'h-12',
  'flex',
  'mx-auto',
  'mt-10',
  'justify-between',
  'text-center',
  'border',
  'bg-gray-100',
  'focus:border-blue-500',
  'border-gray-200',
  'rounded-lg'
)
ul.classList.add(
  'w-96',
  'h-auto',
  'flex',
  'flex-col',
  'mx-auto',
  'mt-2',
  'text-center'
)
document.body.appendChild(div)
div.appendChild(ul)
// Render function
function renderTodo (task, id) {
  const li = document.createElement('li')
  li.setAttribute('data-todoli', id)
  li.setAttribute('draggable', true)
  // Drag Function
  li.addEventListener('dragstart', event => {
    event.dataTransfer.setData('dragtask', id)
  })
  li.addEventListener('dragover', event => {
    event.preventDefault()
  })
  li.addEventListener('drop', event => {
    event.preventDefault()
    let tasklist = JSON.parse(localStorage.getItem('tasklist'))
    //getting id's
    drageid = Number(event.dataTransfer.getData('dragtask'))
    drageoverid = Number(li.dataset.todoli)

    //get index of drage item
    let drageindex = tasklist.findIndex(item => item.id === drageid)
    let [drageitem] = tasklist.splice(drageindex, 1)

    //get index of dragover
    let drageoverindex = tasklist.findIndex(item => item.id === drageoverid)
    tasklist.splice(drageoverindex, 0, drageitem)
    localStorage.setItem('tasklist', JSON.stringify(tasklist))
    //remove from privious position
    ul.innerHTML = "";
    tasklist.forEach(element => {
      renderTodo(element, element.id)
    })


  })
  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  const span = document.createElement('span')
  const deletetodo = document.createElement('button')
  const edittodo = document.createElement('button')

  li.appendChild(checkbox)
  li.appendChild(span)
  li.appendChild(deletetodo)
  li.appendChild(edittodo)

  checkbox.type = 'checkbox'
  span.textContent = task['text']
  //important
  if (task.complete) {
    checkbox.checked = true
    span.classList.add('line-through', 'decoration-red-500')
  } else {
    // Edit Todo
    edittodo.textContent = 'Edit'
    edittodo.addEventListener('click', function (event) {
      let tasklist = JSON.parse(localStorage.getItem('tasklist'))
      //console.log(event);
      let editId = Number(li.dataset.todoli) // same as getattribute(todoli)
      //let text = span.textContent;
      let editIndex = tasklist.findIndex(item => item.id === editId)
      tasklist.splice(editIndex, 1)

      localStorage.setItem('tasklist', JSON.stringify(tasklist))

      input.value = span.textContent
      input.dataset.editId = editId
      li.remove()
    })
  }

  //Styling of li
  li.classList.add(
    'w-96',
    'h-auto',
    'flex',
    'justify-between',
    'align-center',
    'mx-auto',
    'mt-2',
    'text-center',
    'border',
    'rounded-lg',
    'px-4',
    'py-2',
    'capitalize',
    'hover:bg-slate-300'
  )
  checkbox.classList.add('w-5', 'h-5')
  checkbox.addEventListener('change', function () {
    let tasklist = JSON.parse(localStorage.getItem('tasklist')) || []
    let idli = parseInt(li.getAttribute('data-todoli')) //if id is string dont use parseInt
    let index = tasklist.findIndex(item => item.id === idli)
    if (checkbox.checked) {
      span.classList.add('line-through', 'decoration-red-500')
      tasklist[index].complete = true
    } else {
      span.classList.remove('line-through', 'decoration-red-500')
      tasklist[index].complete = false
    }
    localStorage.setItem('tasklist', JSON.stringify(tasklist))
    ul.innerHTML = ''
    tasklist.forEach(element => {
      renderTodo(element, element.id)
    })
  })

  // single deletion
  deletetodo.textContent = 'Delet it'
  deletetodo.addEventListener('click', () => {
    let confirmation = confirm('Are You sure to delet before Task Complte')
    let tasklist = JSON.parse(localStorage.getItem('tasklist')) || []
    let liIndex = tasklist.findIndex(item => item.id === id)
    if (confirmation && checkbox.checked != true) {
      li.remove()

      tasklist.splice(liIndex, 1)
      localStorage.setItem('tasklist', JSON.stringify(tasklist))
    }
  })
  ul.appendChild(li)
}

// custom button
let tasklist = JSON.parse(localStorage.getItem('tasklist')) || []
if (tasklist.length > 0) {
  const buttonDiv = document.createElement('div')
  buttonDiv.classList.add(
    'flex',
    'justify-center',
    'mx-auto',
    'bg-slate-300',
    'w-96',
    'h-auto',
    'mt-2'
  )
  const removeAlltodo = document.createElement('button')
  const checkTodo = document.createElement('button')

  checkTodo.textContent = 'Task Complete'
  checkTodo.addEventListener('click', () => {
    let tasklist = JSON.parse(localStorage.getItem('tasklist'))

    let completetask = tasklist.filter(item => item.complete === true)
    localStorage.setItem('completetask', JSON.stringify(completetask))

    let remaining = tasklist.filter(item => item.complete !== true)
    localStorage.setItem('tasklist', JSON.stringify(remaining))
    ul.innerHTML = ''
    //rerender
    remaining.forEach(element => {
      renderTodo(element, element.id)
    })
  })
  removeAlltodo.textContent = 'Delete All'
  removeAlltodo.addEventListener('click', () => {
    localStorage.removeItem('tasklist')
    ul.innerHTML = ''
  })

  buttonDiv.appendChild(removeAlltodo)
  buttonDiv.appendChild(checkTodo)
  div.appendChild(buttonDiv)
  removeAlltodo.classList.add(
    'w-full',
    'h-auto',
    'bg-gray-100',
    'px-4',
    'py-2',
    'text-red-500',
    'hover:bg-gray-300',
    'hover:text-white'
  )
  checkTodo.classList.add(
    'w-full',
    'h-auto',
    'bg-gray-100',
    'px-4',
    'py-2',
    'text-green-500',
    'hover:bg-gray-300',
    'hover:text-white'
  )
}
// Complete Task UI
// let completetask = JSON.parse(localStorage.getItem('completetask'))
// const completetaskdiv = document.createElement('div');
// const ul = document.createElement('ul');
// document.body.appendChild(completetaskdiv)
// completetaskdiv.appendChild(ul)
// if(completetask.length > 0){
//   completetask.forEach((element,id) => {

//   });
//    const li = document.createElement('li')
//    const span = document.createElement('span')
//    li.appendChild(span);

// }
