// Callback function example 1
let value1 = "This is value 1";;
let value2 = "This is value 2";;
let value3 = "This is value 3";;
setTimeout(() => {
    value1 = "30";
    value2 = "40";
    value3 = "50";
    document.getElementById('display1').textContent = value1;
    document.getElementById('display2').textContent = value2;
    document.getElementById('display3').textContent = value3;
    alert("Values have been updated after 2 seconds");

}, 2000);
function getvalue1() {
    document.getElementById('display1').textContent = value1;
    console.log(value1);
}
function getvalue2() {
    document.getElementById('display2').textContent = value2;
    console.log(value2);
}
function getvalue3() {
    document.getElementById('display3').textContent = value3;
    console.log(value3);
}
getvalue1();
getvalue2();
getvalue3();

// Callback function example 2
function fetchData(callback) {
    setTimeout(() => {
        const data = "Data fetched successfully!";
        callback(data);
    }, 3000);
}
function displayData(data) {
    console.log(data);
    document.getElementById('dataDisplay').textContent = data;
}
fetchData(displayData);

//callback function example 3
function performTask(task, callback) {
    console.log("Performing task: " + task);
    setTimeout(() => {
        const result = "Result of " + task;
        callback(result);
    }, 5000);
}
function handleResult(result) {
    console.log(result);
}
performTask("Sample Task", handleResult);

// Callback function example 4
function persentageOf(num1, num2, num3, num4, num5, callback) {
    setTimeout(() => {
        const result = (num1 + num2 + num3 + num4 + num5) / 500 * 100 + "%";
        callback(result);
    }, 2000);
}
function displayPersentage(result) {
    console.log("the persentage is :" + result);
}
persentageOf(70, 80, 65, 90, 50, displayPersentage);
// Callback function example 5

function calculateArea(radius, displayArea) {
    setTimeout(() => {
        alert("Calculateing area of Circle with radius:" + radius);
        const area = Math.PI * radius * radius;
        displayArea(area);
        alert("Area calculate successfully Of Circle with radius" + radius);
    }, 5000);
    document.getElementById('radiusShow').textContent = "The radius is: " + radius;
}

function displayArea(Area){
    console.log("the area of circle is:"+ Area);
    const span =document.createElement('span');
    span.id = "areaDisplay";
    span.innerHTML = "The area of circle is: " + Area;
    document.body.appendChild(span);
}
calculateArea(8,displayArea);

// Callback function example 6
function downloadFile(filename, callback){
    console.log("Starting Downloading file:" + filename);
    const fileContent = "This is the content of "+ filename;
    setTimeout(()=>{
        callback(fileContent);
        },9000);
}
function displayFileContent(content){
    console.log(content +" Downloaded successfully");
}
downloadFile("software.exe", displayFileContent);

//callback function example 7
function orderPizza(pizzaType, userName, callback){
    alert(userName + " ordered a " + pizzaType + "pizza ");
    setTimeout(()=>{
        let orderStatus = "Hey"+ userName + "your" +pizzaType + "pizza is going to take 12 minutes to be ready"; 
        callback(orderStatus);
    },2000);
    setTimeout(()=>{
        let orderStatus = "Hey"+ userName + "Your " + pizzaType + "pizza is ready! Come and pick it up";
        const charges = "The total charges for your order is $15";
        callback(orderStatus,charges);
    },9000);
}

function displayOrderStatus(status, charges){
    
    alert(status + "\n" + charges);
}

orderPizza("Pepperoni", "Haider", displayOrderStatus);
