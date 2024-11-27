// Compute functions

// Component vars
const textDisplay = document.querySelector('.calculator-display');
const buttons= document.querySelectorAll('.buttons');

let currentInput = "";
let currentOperator = "";
let previousInput = "";

const mathOperators = ['+', '-', '*', '/']

// textDisplay.innerText = "Calculator";
// Calculator event listener
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.dataset.value;

        if (value === 'C') {
            clearText();
        } else if (value === '=') {
            currentInput = operate(previousInput, currentInput, currentOperator);
            textDisplay.textContent = currentInput;
            previousInput = '';
            currentOperator = '';
        } else if (mathOperators.includes(value)) {
            currentOperator = value;
            previousInput = currentInput;
            currentInput = '';
        } else {
            currentInput += value;
            textDisplay.textContent = currentInput;
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

function clearText() {
    currentInput = '';
    previousInput = '';
    currentOperator = '';
    textDisplay.textContent = '0';
}