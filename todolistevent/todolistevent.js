// simple with this handler

    const ullist = document.getElementById('todolist').innerText;
    //console.log(ullist);
    function removeItem(button)
    {
        button.parentElement.remove();
    }
// simple with event handler

   const todolistevent = document.getElementById('todolistevent');

todolistevent.addEventListener('click', function(event){
    console.log(event);
    //console.log(event.target.tagName);
    //console.log(event.target);
    if(event.target.tagName === "BUTTON"){
        event.target.parentElement.remove();
    }
});
        

// dynamic creation with ul  with onkey

    const ul = document.createElement('ul');
    document.body.appendChild(ul);
    function pressit(event)
    {
        event.preventDefault();
        if(event.key === 'Enter')
        {
            const li = document.createElement('li');
            li.textContent = event.target.value;
            console.log(li.textContent);
            ul.appendChild(li);
            event.target.value = ""
        }
    }

 // TodoList with form'attribute name   
    function pressItBySubmitName(event){
        console.log(event);
        event.preventDefault();
        const value = event.target.todo.value;
        //console.log(value);
        //console.log(event.target);
        if(value !== null && NaN(value))
        {
            const li = document.createElement('li');
            li.textContent = value;
            console.log(li.textContent);
            ul.appendChild(li);
            event.target.todo.value = ""
        }
    }

  // TodoList  with form'attribute id
    function pressItBySubmitId(event){
        //console.log(event);
        event.preventDefault();
        // console.log(event.target.todoid.value);
        const input = document.getElementById('todoid');
        const value = input.value
        //console.log(value);
        if(value != "" && isNaN(value))
        {
            const li = document.createElement('li');
            li.textContent = value;
            //console.log(li.textContent);
            ul.appendChild(li);
            input.value = ""
        }
    }
    