const numbers = ["two", "three"]
numbers.unshift("one");
console.log(numbers);

// third element
numbers.push("four");
console.log(numbers);
//let in condition to check is five available or not and if not add it
// if(!numbers.indexOf("five")){
//     numbers.push("five");
//     console.log(numbers);
// }
// else if(numbers.indexOf("five"))
// {
//     console.log("five is present array")
// }
// if(numbers.indexOf("six")){
//     console.log("six is present in array")
// }
// else if(!numbers.indexOf("six"))
// {
// numbers.push("six");
// console.log(numbers);
// }

// second Try
function checkNumbers(number){
    if(numbers.indexOf(number) === -1){
        console.log(number + " is not present in array Now I will add it to array")
        numbers.push(number);
        console.log(numbers);
        console.log(number + " is Now added to numbers")
    }
    else
        {
            console.log(number + " number is already present in array")
        }
}
checkNumbers("five");
checkNumbers("six");
console.log(numbers);
checkNumbers("two");
console.log(numbers);
checkNumbers("seven");
// Delet a element from array from last
numbers.pop();
console.log(numbers);
console.log("Now last number is removed from array");
console.log(numbers.indexOf(""));
// Delet element through splice method any random
numbers.splice(3,1);
console.log(numbers);
console.log(numbers.indexOf("five"));
// Remove element value not index
delete numbers[2];
console.log(numbers);

// input value show in console
const list = document.getElementById('checking');
list.addEventListener('click',function () {
    console.log(list.value);
})
console.log(list);

// input with button
const listarray = []; 
console.log(listarray);
const todolist = document.getElementById('todolist');
const addbtn = document.getElementById('addtask');
const ul = document.createElement('ul');
ul.id = 'ullist';
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
    const remove = document.createElement('button');
    remove.textContent = "Remove"
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




