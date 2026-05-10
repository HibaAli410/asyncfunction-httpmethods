const container = document.createElement('div');
container.classList.add(
    "flex",
    "justify-center",
    "mt-8"
)
document.body.appendChild(container);
const input = document.createElement('input');
input.type="text";
input.id = "todolist";
input.placeholder = " Note down List";
input.classList.add(
    "border",
    "p-2",
    "rounded",
    "w-64"  // width of input
);
container.appendChild(input)
const button = document.createElement('button');
button.type="submit";
button.id = "addtask"
button.textContent = " Add to List";
button.classList.add(
    "border",
    "p-2",
    "rounded",
    "w-auto",
    "bg-blue-300",
    "text-white"  // width of input
);
container.appendChild(button)
const listresultcontainer = document.createElement('div');
listresultcontainer.classList.add(
    "flex",
    "justify-center"
)
container.appendChild(listresultcontainer)
const listarray = [];
console.log(listarray);
const todolist = document.getElementById('todolist');
const addbtn = document.getElementById('addtask');
const ul = document.createElement('ul');
ul.id = 'ullist';
ul.classList.add(
    "flex",
    "flex-col",
    "items-center",
    "mx-auto", 
    "mt-4",
    "w-full", "max-w-md","list-square"
)
document.body.appendChild(ul);
addbtn.addEventListener('click',function(){
    const task = todolist.value;
    if(task.trim() === ""){
        console.log("empty task not allowed");
    }
     else if(listarray.includes(task)){
        console.log("you already write this task");
     }
     else if(!(listarray.includes(task))){
        console.log(todolist.value);
    listarray.push(todolist.value);
    // create new task on new line
    const li = document.createElement('li');
    li.classList.add(
        "mx-auto",
        "px-auto",
    )
    const remove = document.createElement('button');
    remove.textContent = "Remove"
    remove.classList.add(
        "border","border-2","rounded","w-auto",
    )
    remove.addEventListener('click', function () {
        let indexnumber = listarray.indexOf(task);
        //console.log(indexnumber);
        //console.log(listarray.indexOf(task))
        listarray.splice(indexnumber,1);
        console.log(listarray);
        li.remove();
        
    })
    li.textContent = task;
    li.appendChild(remove);
    ul.appendChild(li);
    todolist.value = "";
}
       
})

