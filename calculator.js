
function multiply(numberOne, numberTwo){
    return numberOne * numberTwo;
}

function divide(numberOne, numberTwo){
    return numberOne / numberTwo;
}

function add(numberOne, numberTwo){
    return numberOne + numberTwo;
}

function subtract(numberOne, numberTwo){
    return numberOne - numberTwo;
}

function operate(operator, numberOne, numberTwo){
    if (operator === "X"){
        return multiply(numberOne, numberTwo);
    } else if (operator === "/"){
        return divide(numberOne, numberTwo);
    } else if (operator === "+"){
        return add(numberOne, numberTwo);
    } else if (operator === "-"){
        return subtract(numberOne, numberTwo);
    }
}

// store a number as it is typed in by the user
let temp = "";
const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
    number.addEventListener("click", () => {
        temp = Number(temp + number.textContent);
        console.log(temp);
    })
})

// when the user selects an operation, save the number and the operator
let numberOne = 0;
const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        numberOne = temp;
        operator = operator.textContent;
        console.log(numberOne);
        console.log(operator);
    })
})

// after an operator has been selected, select a second number

