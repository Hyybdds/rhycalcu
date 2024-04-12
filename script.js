let display = document.querySelector('input[name="display"]');
let firstNumber = null;
let secondNumber = null;
let currentOperator = null;

function appendDisplay(number) {
    if (currentOperator === null) {
        firstNumber = firstNumber!== null? parseFloat(firstNumber + '' + number) : number;
        display.value = firstNumber;
    } else {
        secondNumber = secondNumber!== null? parseFloat(secondNumber + '' + number) : number;
        display.value = secondNumber;
    }
}


function appendOperator(operator) {
    if (operator === '%') {
        if (firstNumber!== null && secondNumber!== null) {
            switch(currentOperator) {
                case '+':
                    secondNumber = parseFloat(firstNumber) + (parseFloat(firstNumber) * (parseFloat(secondNumber) / 100));
                    break;
                case '-':
                    secondNumber = parseFloat(firstNumber) - (parseFloat(firstNumber) * (parseFloat(secondNumber) / 100));
                    break;
                case '*':
                    secondNumber = parseFloat(firstNumber) * (parseFloat(secondNumber) / 100);
                    break;
                case '/':
                    secondNumber = parseFloat(firstNumber) / (parseFloat(secondNumber) / 100);
                    break;
            }
            display.value = secondNumber;
            firstNumber = null;
        } else if (firstNumber!== null) {
            firstNumber = parseFloat(firstNumber) / 100;
            display.value = firstNumber;
        }
    } else {
        if (firstNumber!== null && secondNumber!== null) {
            switch(currentOperator) {
                case '+':
                    firstNumber = parseFloat(firstNumber) + parseFloat(secondNumber);
                    break;
                case '-':
                    firstNumber = parseFloat(firstNumber) - parseFloat(secondNumber);
                    break;
                case '*':
                    firstNumber = parseFloat(firstNumber) * parseFloat(secondNumber);
                    break;
                case '/':
                    firstNumber = parseFloat(firstNumber) / parseFloat(secondNumber);
                    break;
            }
            display.value = firstNumber;
            secondNumber = null;
        }
        currentOperator = operator;
    }
}

function calculateResult() {
    if (firstNumber!== null && secondNumber!== null && currentOperator!== null) {
        let result = eval(firstNumber + currentOperator + secondNumber);
        display.value = result;
        firstNumber = result;
        secondNumber = null;
        currentOperator = null;
    }
}

function clearDisplay() {
    firstNumber = null;
    secondNumber = null;
    currentOperator = null;
    display.value = '0';
}

function toggleSign() {
    if (firstNumber!== null) {
        firstNumber = -firstNumber;
        display.value = firstNumber;
    } else if (secondNumber!== null) {
        secondNumber = -secondNumber;
        display.value = secondNumber;
    }
    if (firstNumber!== null && secondNumber!== null) {
        calculateResult();
    }
}

function appendDecimal() {
    if (currentOperator === null) {
        firstNumber = firstNumber!== null? firstNumber + '.' : '0.';
        display.value = firstNumber;
    } else {
        secondNumber = secondNumber!== null? secondNumber + '.' : '0.';
        display.value = secondNumber;
    }
}

function appendPercentage() {
    if (firstNumber!== null) {
        firstNumber = firstNumber * 0.01;
        display.value = firstNumber;
    }
}