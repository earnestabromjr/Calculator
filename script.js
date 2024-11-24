// Compute functions

// Component vars
const calculator = document.getElementsByClassName('calculator');
const textDisplay = document.querySelector('.calculator-display');
const buttons= document.querySelector('.buttons')
// textDisplay.innerText = "Calculator";
// Calculator event listener

// Update display
buttons.addEventListener('click', (event) => {
    textDisplay.classList.add('calculator-display');
    textDisplay.textContent += event.target.textContent;
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