//Empty array
let listOftodo = []
//Add a todo function
function addTodo (event) {
  if (event.keyCode === 13 && event.target.value.trim() !== '') {
    listOftodo = JSON.parse(localStorage.getItem('tasklist')) || []
    let taskObj;
    let editId = Number(input.dataset.editId)
    if (input.dataset.editId) {
     taskObj = { id: editId, text: input.value, complete:false }
     listOftodo.push(taskObj)
      delete input.dataset.editId
    } else {
      taskObj = {
        id: Date.now(),
        complete: false,
        text: event.target.value
      }
      listOftodo.push(taskObj)
    }
    localStorage.setItem('tasklist', JSON.stringify(listOftodo))
    renderTodo(taskObj, taskObj['id'])
    event.target.value = ''
  }
}
// Fetching form local storage for UI
listOftodo = JSON.parse(localStorage.getItem('tasklist')) || []
listOftodo.forEach(event => {
  renderTodo(event, event.id)
})
