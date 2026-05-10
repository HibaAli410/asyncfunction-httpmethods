const div = document.getElementById('container')
const input = document.getElementById('todos')
const deletall = document.createElement('button')
const deleteselected = document.createElement('button')
const ul = document.createElement('ul')
deletall.type = 'button'
deleteselected.type = 'button'
document.body.appendChild(div)
div.appendChild(ul)

//UI
document.body.classList.add(
    'flex',
    'items-center',
    'justify-center',
    'min-h-screen',
    'p-3',
    'sm:p-6',
    'bg-gradient-to-br',
    'from-gray-900',
    'via-gray-800',
    'to-emerald-900'
)
ul.classList.add(
    'w-full',
    'flex',
    'flex-col',
    'mt-3',
    'p-2',
    'rounded-xl',
    'bg-gradient-to-b',
    'from-white/5',
    'to-transparent',
    'border',
    'border-white/10',
    'shadow-lg'
)
div.classList.add(
    'flex',
    'flex-col',
    'justify-center',
    'items-center',
    'w-full',
    'max-w-xl',
    'p-4',
    'sm:p-6',
    'md:p-8',
    'rounded-2xl',
    'bg-white/10',
    'backdrop-blur-md',
    'border',
    'border-white/20',
    'shadow-2xl',
    'transition',
    'duration-300'
)
input.classList.add(
    'w-full',
    'h-11',
    'sm:h-12',
    'text-center',
    'border-4',
    'bg-gray-100',
    'focus:border-lime-500',
    'rounded-lg',
    'mb-3'
)

function presentingTodo(task,id) {
    console.log(task);
    task = task.text
    const li = document.createElement('li');
    li.setAttribute("data-todo",id);
    // getting index from custom attribute
    const checkbox = document.createElement('input')
    const removeli = document.createElement('button')
    const edit = document.createElement('button')
    const span = document.createElement('span')
    span.textContent = task
    span.classList.add(
        'flex-1', // takes remaining space
        'break-words' // wrap long words
    );
    (removeli.type = 'button'),
        (removeli.textContent = 'Delete'),
                (edit.textContent = 'Edit')

    checkbox.type = 'checkbox'
    ul.appendChild(li)
    li.appendChild(checkbox)
    li.appendChild(span)
    li.appendChild(edit)
    li.appendChild(removeli)
    // li, removebutton styling
    li.classList.add(
        'flex',
        'gap-2',
        'items-center',
        'text-orange-50',
        'capitalize',
        'p-2',
        'w-full',
        'rounded-lg',
        'mt-2',
        'line-clamp-3',
        'bg-cyan-950',
        'hover:shadow-lg',
        'transition',
        'duration-200',
        'hover:scale-[1.01]'
    )
    //checkbox, styling
    checkbox.classList.add(
        'w-4',
        'h-4',
        'border-4',
        'border-red-200',
        'accent-red-500',
        'hover:bg-violet-600',
        'focus:outline-2',
        'focus:outline-offset-2',
        'focus:outline-red-800'
    )
    checkbox.addEventListener('change', function () {
        let todolist = JSON.parse(localStorage.getItem('todolist')) || []
        const id = li.getAttribute("data-todo");
        //console.log(id);
        const index = todolist.findIndex(item => item.id === id);
        //console.log(index);
        //console.log(todolist[index].completed);
        if(checkbox.checked === true){
            todolist[index].completed = true; 
            span.classList.add('line-through');
        }
        else{
            todolist[index].completed = false; 
            span.classList.remove('line-through');
        }
        localStorage.setItem('todolist',JSON.stringify(todolist))
    })
     //edit button styling
    edit.classList.add(
        'py-1',
        'px-3',
        'text-sm',
        'bg-gray-400',
        'text-white',
        'rounded-lg',
        'hover:bg-green-600',
        'ml-auto',
        'transition'
    )
    // button styling
    removeli.classList.add(
        'py-1',
        'px-3',
        'text-sm',
        'bg-gray-400',
        'text-white',
        'rounded-lg',
        'hover:bg-red-600',
        'ml-auto',
        'transition'
    )
    // edit task
    edit.addEventListener('click',function(event){
        let todolist = JSON.parse(localStorage.getItem('todolist'))
        
    })
    // remove single item of todos
    removeli.addEventListener('click', function (event) {
        // console.log(event.target.parentElement);
        let confirmation = confirm("Are You Sure to delet it Without Compete the task");
        if(confirmation === true){li.remove()
        let todolist = JSON.parse(localStorage.getItem('todolist'))
        let index = todolist.findIndex(todo => todo.text === task)
        todolist.splice(index, 1)
        localStorage.setItem('todolist', JSON.stringify(todolist))}
        
    })
}

//visibility remove button
let buttonvisibilty = JSON.parse(localStorage.getItem('todolist'))
if (buttonvisibilty && buttonvisibilty.length >= 0) {
    const btnWrap = document.createElement('div')
    btnWrap.classList.add(
        'flex',
        'flex-col',
        'sm:flex-row',
        'gap-2',
        'w-full',
        'mt-3'
    )
    deletall.textContent = 'Delete All'
    // delete All items
    deletall.classList.add(
        'w-full',
        'sm:w-1/2',
        'px-4',
        'bg-red-500',
        'text-white',
        'p-2',
        'rounded-lg',
        'hover:bg-red-600',
        'transition'
    )
    deletall.addEventListener('click', function () {
        localStorage.setItem('todolist', JSON.stringify([]))
        ul.innerHTML = ''
    })
    //Completed-task clear button
    deleteselected.textContent = 'Clear Completed'
    deleteselected.addEventListener('click', function () {
        let todolist = JSON.parse(localStorage.getItem('todolist')) || []
        todolist = todolist.filter(check => check.completed !== true ); 
        localStorage.setItem('todolist',JSON.stringify(todolist));
        ul.innerHTML = ''
            todolist.forEach(element => {
                presentingTodo(element)
            });
       
    })

    deleteselected.classList.add(
        'w-full',
        'sm:w-1/2',
        'px-4',
        'bg-orange-500',
        'text-white',
        'p-2',
        'rounded-lg',
        'hover:bg-orange-600',
        'transition'
    )
    btnWrap.appendChild(deletall)
    btnWrap.appendChild(deleteselected)
    div.appendChild(btnWrap)
    //selected items reemove function
    deleteselected.addEventListener('click', function (event) { })
} else {
    console.log('there is no data')
}

//onkeyup Event occur
function todoList(event) {
    if (event.keyCode === 13 && event.target.value.trim() !== '') {
        let todolist = JSON.parse(localStorage.getItem('todolist')) || []
        let todoObj = {
            id: "todo-" + Date.now(),
            text: event.target.value,
            completed: false,
        }
        //console.log(todoObj["id"]);
        todolist.push(todoObj)
        localStorage.setItem('todolist', JSON.stringify(todolist))
        presentingTodo(todoObj,todoObj["id"])

        event.target.value = ''
        // todolist.push(todotask);
        // localStorage.setItem('todolist', JSON.stringify(todolist));
        // presentingTodo(todotask);
        // event.target.value = "";
        // localStorage.removeItem('todolist') if a string "hello" store not like "[hello]" its not store more
    }
}
let fetchtodos = JSON.parse(localStorage.getItem('todolist'))

if (!Array.isArray(fetchtodos)) {
    fetchtodos = []
}
fetchtodos.forEach(element => {
    presentingTodo(element,element.id)
})
