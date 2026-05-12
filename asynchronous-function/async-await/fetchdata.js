async function fetchingData(callback){
    try{
        const fetching = await fetch("https://jsonplaceholder.typicode.com/users/3/todos");
        const todos = await fetching.json();
         
        //  const todoTitle = await todo[0].title;
        //  const totdoCompleted = await todo[0].completed;
        //  const todoUserId = await todo[0].userId;
        //  console.log(todoTitle);
        //  console.log(totdoCompleted);
        // console.log(todoUserId);
        console.log(todos);
        setTimeout(()=>{
            callback(todos);
        },2000);
    }
    catch(error){
        console.log(error);

    }
}
fetchingData(callback);
function callback(todos){
    const ul = document.createElement("ul");
    const div = document.getElementById("display");
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        const item = document.createElement("div");
        const checkbox = document.createElement('input');
        const span = document.createElement('span');
        li.setAttribute("data-swapy-slot","slot-" + index);
        checkbox.type = "checkbox";
        checkbox.checked = todo.completed;
        span.textContent = todo.title;
        item.setAttribute("data-swapy-item","item-" + index);
        item.appendChild(checkbox);
        item.appendChild(span);
        li.appendChild(item);
        ul.appendChild(li);
    });
    div.appendChild(ul);
    Swapy.createSwapy(div, {
        swapMode: "drop",
        dragAxis: "both"
    });
}
