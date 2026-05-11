//Empty array
let listOftodo = JSON.parse(localStorage.getItem('tasklist')) || [];

if (listOftodo.length === 0) {
  for (let one = 1; one <= 10; one++) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${one}`)
      .then(res => res.json())
      .then(todo => {
        listOftodo.push(todo);

        localStorage.setItem(
          'tasklist',
          JSON.stringify(listOftodo)
        );

        renderTodo(todo, todo.id);
      });
  }
} else {
  // Already saved → just show from localStorage
  listOftodo.forEach(todo => {
    renderTodo(todo, todo.id);
  });
}
//Add a todo function
function addTodo (event,editId) {
  if (event.keyCode === 13 && event.target.value.trim() !== '') {
    listOftodo = JSON.parse(localStorage.getItem('tasklist')) || []
    let taskObj
    
    let editId = Number(input.dataset.editId)
    if (input.dataset.editId) {
      taskObj = { id: editId, title: input.value, completed: false }
      listOftodo.push(taskObj)
      delete input.dataset.editId
    } else {
        fetch('https://jsonplaceholder.typicode.com/todos',{
        method: 'POST',
        headers:{'Content-type':'application/json'},
        body: JSON.stringify({id: Date.now(), title:event.target.value, completed:false})
        })
        .then(serverres => serverres.json())
        .then(taskObj=>{
            console.log(taskObj);
            listOftodo.push(taskObj)
            localStorage.setItem('tasklist', JSON.stringify(listOftodo))
            renderTodo(taskObj, taskObj.id)
        })
    //   taskObj = {
    //     id: Date.now(),
    //     completed: false,
    //     title: event.target.value
    //   }
      
    }
    localStorage.setItem('tasklist', JSON.stringify(listOftodo))
    renderTodo(taskObj, taskObj.id)
    event.target.value = ''
  }
}
// Fetching form local storage for UI
listOftodo = JSON.parse(localStorage.getItem('tasklist')) || []
listOftodo.forEach(event => {
  renderTodo(event, event.id)
})
