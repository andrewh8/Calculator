
// identify the screen element
const screen = document.querySelector(".screen");

// store a number as it is typed in by the user
let temp = "";
const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
    number.addEventListener("click", () => {
        if (temp.includes(".") && number.textContent === "."){
            return;
        } else {
            temp = temp + number.textContent;
            screen.textContent = temp;
        }
    })
})

// when the user selects an operation, save temp into a number variable, save the operator, and reset temp
let numberOne = "";
let operation = "";
const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
    operator.addEventListener("click", () => {

        // if there is a value for temp, but no value for numberOne
        if (temp !== "" && numberOne === ""){
            temp = parseFloat(temp);
            numberOne = temp;
            operation = operator.textContent;
            screen.textContent = operation;
            temp = "";
        } 
        // if there is a value for numberOne but no value for temp
        else if (temp === "" && numberOne !== ""){
            operation = operator.textContent;
            screen.textContent = operation;
        }
        // if there is a value for numberOne and a value for temp
        else if (temp !== "" && numberOne !== ""){
            temp = parseFloat(temp);
            equal(numberOne, temp);
            operation = operator.textContent;
            screen.textContent = operation;
        }
        // if numberOne and temp are both empty
        else if (temp === "" && numberOne === ""){
            return;
        }
    })
})

// if user clicks the equals button, call the equal function
const equals = document.querySelector(".equals");
equals.addEventListener("click", equal);

// equal requries that there be a value for numberOne, operation, and temp
// equal sets the result to numberOne in case the user presses another operation directly afterwards instead of restarting
function equal(){
    if (numberOne !== "" && operation !== "" && temp !== "") {
        if (operation === "X"){
            numberOne = multiply(numberOne, temp);
            screen.textContent = numberOne;
            temp = "";
        } else if (operation === "/"){
            numberOne = divide(numberOne, temp);
            screen.textContent = numberOne;
            temp = "";
        } else if (operation === "+"){
            numberOne = add(numberOne, temp);
            screen.textContent = numberOne;
            temp = "";
        } else if (operation === "-"){
            numberOne = subtract(numberOne, temp);
            screen.textContent = numberOne;
            temp = "";
        }
    } else {
        return;
    }
}

// clear function
const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    temp = "";
    numberOne = "";
    operation = "";
    screen.textContent = temp;
})

// backspace function
const backspace = document.querySelector(".backSpace");
backspace.addEventListener("click", () => {
    temp = temp.toString();
    temp = Number(temp.substr(0, temp.length - 1));
    screen.textContent = temp;
})


// calculation functions
function multiply(numberOne, numberTwo){
    let result = numberOne * numberTwo;
    if (result % 1 !== 0){
        return Number(result.toFixed(3));
    } else {
        return result;
    }
}

function divide(numberOne, numberTwo){
    // add divide by 0 error
    let result = numberOne / numberTwo;
    if (numberTwo === 0){
        temp = "";
        numberOne = "";
        operation = "";
        return "Error";
    } else {
        if (result % 1 !== 0){
            return Number(result.toFixed(3));
        } else {
            return result;
        }
    }
    
}

function add(numberOne, numberTwo){
    numberTwo = parseFloat(numberTwo);
    let result = numberOne + numberTwo;
    if (result % 1 !== 0){
        return Number(result.toFixed(3));
    } else {
        return result;
    }
}

function subtract(numberOne, numberTwo){
    numberTwo = parseFloat(numberTwo);
    let result = numberOne - numberTwo;
    if (result % 1 !== 0){
        return Number(result.toFixed(3));
    } else {
        return result;
    }
}