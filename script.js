// Compute functions

// Component vars
const calculator = document.getElementsByClassName('calculator');

const textDisplay = document.querySelector('.calculator-display');
const displayTextArray = [];
const buttons= document.querySelector('.buttons')

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

let firstNumber = "";
let currentOperator = null;
let secondNumber = "";

const mathOperators = ['+', '-', '*', '/']

// textDisplay.innerText = "Calculator";
// Calculator event listener


// Retrieve operands and operator
buttons.addEventListener('click', (event) => {
    mathOperators.forEach((sign) => {
        if (event.target.textContent === sign) {
            logValue(firstNumber);
        }
    })
})

// Update display
buttons.addEventListener('click', (event) => updateDisplay(event) );

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return (num1) - (num2);
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            if (num2 !== 0) {
                return divide(num1, num2);
            } else {
                throw new Error("Cannot divide by zero");
            }
        default:
            throw new Error(`Invalid operator: ${operator}`);
    }
}

function clearText() {
    textDisplay.textContent = "";
}

function logValue(operand) {
    operand = textDisplay.textContent
    clearText()
    console.log(operand);
}

function updateDisplay (event) {
    textDisplay.textContent += event.target.textContent;
}