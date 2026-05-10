const numberOne = document.getElementById('numone');
const numberTwo = document.getElementById('numtwo');
const numberButtons = document.querySelectorAll("#buttondiv button");
const operatorsButtons = document.querySelectorAll("#operatorsdiv button");
const resultButton = document.querySelectorAll("#result button");

let operator = '';
numberButtons.forEach(btn => {
  btn.addEventListener('click',() => {
    // if(numberOne.value === null){
    // numberOne.value = btn.textContent;
    // }
    //else 
      if(!operator){
      numberOne.value = btn.textContent;
      
    }
    else{
      numberTwo.value += btn.textContent;
    }
  })
})

//operator click
operatorButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    operator = btn.textContent;
  });
});
resultBtn.addEventListener("click", () => {
  let a = parseFloat(numOne.value);
  let b = parseFloat(numTwo.value);
  let result = 0;

  if (isNaN(a) || isNaN(b)) {
    alert("Enter valid numbers");
    return;
  }
    switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = a / b;
      break;
    case "%":
      result = a % b;
      break;
    default:
      alert("Select operator");
      return;
  }

  alert("Result: " + result);

  // reset
  numOne.value = "";
  numTwo.value = "";
  operator = "";
});