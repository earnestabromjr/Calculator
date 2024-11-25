// Compute functions

// Component vars
const calculator = document.getElementsByClassName('calculator');

const textDisplay = document.querySelector('.calculator-display');
const displayTextArray = Array.from(textDisplay.textContent);
displayTextArray.forEach((letter) => console.log(letter));
const buttons= document.querySelector('.buttons')

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];


const mathOperators = ['+', '-', '*', '/']

// textDisplay.innerText = "Calculator";
// Calculator event listener

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

// function updateDisplay(event) {
//     displayTextArray.push(textDisplay.textContent);
//     textDisplay.classList.add('calculator-display');
//     textDisplay.textContent += event.target.textContent;
//     return displayTextArray;
// }

function updateCalcDisplay (event) {
    if (event.target.classList.contains('digits')) {
        textDisplay.textContent += event.target.textContent;
    } else if (event.target.classList.contains('operations')) {
        textDisplay.textContent += event.target.textContent;
    }
}

let displayText = "";
if (event.target.textContent in numbers) {
    textDisplay.textContent += event.target.textContent;
    displayText.push(textDisplay.textContent);
} else if (event.target.textContent in mathOperators) {
    textDisplay.textContent += event.target.textContent;
}