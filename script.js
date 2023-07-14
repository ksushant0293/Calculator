let number1 = "";
let number2 = "";
let operator = "";

const calcInput = document.querySelector(".calc-input");
const allOperand = document.querySelectorAll(".operand");
const allOperator = document.querySelectorAll(".operator");

allOperand.forEach((button) => {
    button.addEventListener("click", (e) => {
      console.log(e.target.textContent);
      const value = e.target.textContent;
      calcInput.innerText += value;
      if (operator != "") {
        number2 += value;
        console.log(number2, "number2");
      } else {
        number1 += value;
        console.log(number1, "number1");
      }
    });
  });
  
  allOperator.forEach((button) => {
    button.addEventListener("click", (e) => {
      const value = e.target.textContent;
      calcInput.innerText += value;
      operator = value;
      console.log(operator, "operator");
    });
  });