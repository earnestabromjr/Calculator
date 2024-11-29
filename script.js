// Compute functions

// Component vars
const textDisplay = document.querySelector('.calculator-display');
const buttons = document.querySelectorAll('.buttons');

let currentInput = "";
let currentOperator = "";
let previousOperator = "";
let previousInput = "";
let displayValue = '0';

const mathOperators = ['+', '-', '*', '/']
updateDisplay(displayValue);

// textDisplay.innerText = "Calculator";
// Calculator event listener
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.dataset.value;

        if (value === 'C') {
            clearText();
        // } else if (checkForSecondOperator() === true) {
        //     currentInput = operate(previousInput, currentInput, previousOperator);
        //     updateDisplay(currentInput);
        //     previousInput = '';
        //     previousOperator = '';
        } else if (value === '=') {
            calculateInputs(currentOperator);
        } else if (mathOperators.includes(value)) {
            if (currentOperator){
                currentInput = operate(previousInput, currentInput, currentOperator);
                updateDisplay(currentInput);
                previousInput = currentInput;
                currentInput = '';
            } else {
                previousInput = currentInput;
                currentInput = '';
            }
            currentOperator = value;
        } else {
            currentInput += value;
            updateDisplay(currentInput);
        }
    });
});

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
    num1 = parseInt(num1);
    num2 = parseInt(num2);
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
                alert("Cannot divide by zero")
                throw new Error("Cannot divide by zero");
            }
        default:
            alert(`Invalid operator: ${operator}`)
            throw new Error(`Invalid operator: ${operator}`);

    }
}

function updateDisplay(dValue) {
    textDisplay.innerText = dValue;
}

function clearText() {
    currentInput = '';
    previousInput = '';
    currentOperator = '';
    previousOperator = '';
    textDisplay.textContent = '0';
}

function checkForSecondOperator() {
    if (currentOperator !== "") {
        previousOperator = currentOperator;
        return true;
    }
    return false;
}

function calculateInputs(operator) {
    currentInput = operate(previousInput, currentInput, operator);
    updateDisplay(currentInput);
    previousInput = '';
    currentOperator = '';
}