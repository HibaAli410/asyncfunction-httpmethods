const container = document.getElementById('container');

const input = document.getElementById('todo');
const ul = document.createElement('ul');
document.body.appendChild(container);
container.appendChild(ul);

ul.classList.add("flex", "flex-col", "items-center", "mt-4"); // move here
function todoUI(task) {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    const span = document.createElement('span');
    span.id = 'spantask';
    const remove = document.createElement('button');
    checkbox.type = 'checkbox';

    span.textContent = task;
    remove.textContent = "Remove"
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(remove);
    ul.appendChild(li);
    li.classList.add(
        "flex",
        "items-center",
        "gap-2",
        "border",
        "p-2",
        "w-96",
        "rounded",
        
    );
    checkbox.classList.add("w-5", "h-5");
    checkbox.addEventListener('change', function (event) {
        console.log(event.target.checked);
    });
    remove.classList.add(
        "px-3",
        "py-1",
        "bg-gray-400",
        "text-white",
        "rounded",
        "hover:bg-red-600",
        "ml-auto"
    );
    li.addEventListener('click', function (event) {
        // if (checkbox.checked) {
        //     checkbox.checked = !checkbox.checked;
        // }
        //console.log(event);
    })
    remove.addEventListener('click',
        function (event) {
            let removeone = JSON.parse(localStorage.getItem("localstorage"));
            let indexnumber = removeone.indexOf(task);
            console.log(indexnumber);
            removeone.splice(indexnumber, 1);
            localStorage.setItem("localstorage", JSON.stringify(removeone));
            li.remove();
        })

}

function toDo(event) {
    // console.log(event.keyCode);
    if (event.keyCode === 13) {
        const task = event.target.value;
        //console.log(typeof(task)); // string
        let storage = JSON.parse(localStorage.getItem("localstorage")) || [];
        // if (storage === null) {
        //     storage = [];
        // } else {
        //     storage = JSON.parse(localStorage.getItem("localstorage"));
        // }
        storage.push(task);
        localStorage.setItem("localstorage", JSON.stringify(storage));
        todoUI(task);
        event.target.value = "";
    }
}

// fetch from locastorage
let storage = localStorage.getItem("localstorage");
if (storage !== null) {
    storage = JSON.parse(storage); //[]
    storage.forEach(function (task) {
        todoUI(task);
    });
}
const deletall = document.createElement('button');
deletall.type = 'button';
deletall.textContent = "Delet All"
deletall.classList.add(
    "px-3",
    "py-1",
    "bg-red-500",
    "text-white",
    "rounded",
    "hover:bg-red-200",
    "mt-10",
    "w-96",
    "rounded-full"
);
container.appendChild(deletall);
deletall.addEventListener('click', function () {
    const children = ul.children;
    let removecheckeditems = JSON.parse(localStorage.getItem("localstorage"));
    //console.log(children);
    // console.log(children[children.length - 1]) // button
    // console.log(children[children.length - 2]) // ul
   for(let i = children.length - 1; i >= 0; i--) {
        const itemli = children[i];
        //console.log(item);
        const itemchecked = itemli.querySelector('input[type="checkbox"]');
        //console.log(itemchecked);
        if (itemchecked && itemchecked.checked) {
            console.log("checked :", itemli);
            const itemspan = itemli.querySelector('span').textContent;
            const index = removecheckeditems.indexOf(itemspan);
            if (index > -1) {
                removecheckeditems.splice(index, 1);
            }
            itemli.remove();
        }
    }
    localStorage.setItem("localstorage", JSON.stringify(removecheckeditems));

})



