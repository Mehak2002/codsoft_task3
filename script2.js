const display = document.getElementById('display');
const buttons = document.querySelectorAll('.number, .operator');
const clearButton = document.getElementById('clear');
const equalButton = document.getElementById('equal');

let currentInput = '';
let currentOperator = '';
let firstOperand = null;

function updateDisplay() {
    display.value = currentInput;
}

function handleNumberClick(number) {
    currentInput += number;
    updateDisplay();
}

function handleOperatorClick(operator) {
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
        currentOperator = operator;
        currentInput = '';
    }
}

function handleClearClick() {
    currentInput = '';
    currentOperator = '';
    firstOperand = null;
    updateDisplay();
}

function handleEqualClick() {
    if (currentOperator && firstOperand !== null) {
        const secondOperand = parseFloat(currentInput);
        switch (currentOperator) {
            case '+':
                currentInput = (firstOperand + secondOperand).toString();
                break;
            case '-':
                currentInput = (firstOperand - secondOperand).toString();
                break;
            case '*':
                currentInput = (firstOperand * secondOperand).toString();
                break;
            case '/':
                currentInput = (firstOperand / secondOperand).toString();
                break;
        }
        firstOperand = null;
        currentOperator = '';
        updateDisplay();
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('number')) {
            handleNumberClick(button.textContent);
        } else if (button.classList.contains('operator')) {
            handleOperatorClick(button.textContent);
        }
    });
});

clearButton.addEventListener('click', handleClearClick);
equalButton.addEventListener('click', handleEqualClick);
