const input = document.getElementById('todoid');
const ul = document.createElement('ul');
document.body.appendChild(ul);

let todos = [];
const storedata = JSON.parse(localStorage.getItem('todos'));
todos.forEach(value => {
    displayTodos(value);
})

function displayTodos(event){
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox"
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(event.target.value));
    ul.appendChild(li);

    


}


// event handler 
function todoList(event){
  const todo =   event.target.value;
  if(event.keyCode === 13){
    todos.push(todo);
    localStorage.setItem('todos',JSON.stringify(todos));
    displayTodos(event);
  }

}