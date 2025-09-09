let leftNumber = null;
let rightNumber = null;
let operator = null;
let result = null;

//Setting up the content in the screen
const screen = document.getElementById('screen');
screen.textContent = 0;

//Math functions for operate
function add(x, y) {
    return parseFloat(x) + parseFloat(y);
}

function subtract(x, y) {
    return parseFloat(x) - parseFloat(y);
}

function multiply(x, y) {
    return parseFloat(x) * parseFloat(y);
}

function divide(x, y) {
    if(y == 0) {
        return "ERROR!";
    }
    else {
        return parseFloat(x) / parseFloat(y);
    }
}

//Operate function
function operate(leftNum, symbol, rightNum) {
    switch(symbol) {
        case '+':
            return add(leftNum, rightNum);
            break;
        
        case '-':
            return subtract(leftNum, rightNum);
            break;

        case '*':
            return multiply(leftNum, rightNum);
            break;
        
        case '/':
            return divide(leftNum, rightNum);
            break;
    }
}

//Number buttons showing up on screen when clicked
const numberButtons = document.querySelectorAll('.numberButtons');
for (const number of numberButtons) {
    number.addEventListener('click', (e) => {
        if (screen.textContent == 0 || result != null) {
            screen.textContent = number.textContent;
            if (operator == null) {
                leftNumber = screen.textContent;
            }
            else {
                rightNumber = screen.textContent;
            }
        }
        else {
            screen.textContent += number.textContent;
            if (operator == null) {
                leftNumber = screen.textContent;
            }
            else {
                rightNumber = screen.textContent;
            }
        }
    })
}

//All Clear button
const allClear = document.getElementById('clear');
allClear.addEventListener('click', (e) => {
    screen.textContent = 0;
    leftNumber = null;
    rightNumber = null;
    operator = null;
    result = null;
})

//Add button
const addButton = document.getElementById('add');
addButton.addEventListener('click', (e) => {
    if (rightNumber != null) {
        result = operate(leftNumber, operator, rightNumber);
        rightNumber = null;
        leftNumber = result;
        screen.textContent = leftNumber;
        operator = '+';
    }
    else {
        leftNumber = screen.textContent;
        screen.textContent = '';
        operator = '+';
    }
})

//Subtract button
const subtractButton = document.getElementById('subtract');
subtractButton.addEventListener('click', (e) => {
    if (rightNumber != null) {
        result = operate(leftNumber, operator, rightNumber);
        rightNumber = null;
        leftNumber = result;
        screen.textContent = leftNumber;
        operator = '-';
    }
    else {
        leftNumber = screen.textContent;
        screen.textContent = '';
        operator = '-';
    }
})

//Multiply button
const multiplyButton = document.getElementById('multiply');
multiplyButton.addEventListener('click', (e) => {
    if (rightNumber != null) {
        result = operate(leftNumber, operator, rightNumber);
        rightNumber = null;
        leftNumber = result;
        screen.textContent = leftNumber;
        operator = '*';
    }
    else {
        leftNumber = screen.textContent;
        screen.textContent = '';
        operator = '*';
    }
})

//Divide button
const divideButton = document.getElementById('divide');
divideButton.addEventListener('click', (e) => {
    if (rightNumber != null) {
        result = operate(leftNumber, operator, rightNumber);
        rightNumber = null;
        leftNumber = result;
        screen.textContent = leftNumber;
        operator = '/';
    }
    else {
        leftNumber = screen.textContent;
        screen.textContent = '';
        operator = '/';
    }
})

//Equals button
const equalsButton = document.getElementById('equals');
equalsButton.addEventListener('click', (e) => {
    if(leftNumber != null && rightNumber != null && operator != null) {
        result = operate(leftNumber, operator, rightNumber);
        rightNumber = null;
        leftNumber = result;
        screen.textContent = leftNumber;
        operator = null;
    }
    else {
        return;
    }
})

//Delete Key
const deleteButton = document.getElementById('delete');
deleteButton.addEventListener('click', (e) => {
    let current = screen.textContent;
    if (current != 0 || current != '') {
        current = current.slice(0, -1);
        screen.textContent = current;
        if (rightNumber != null) {
            rightNumber = screen.textContent;
        }
        else {
            leftNumber = screen.textContent;
        }
    }
    else {
        return;
    }
})

//Decimal Key
const decimalButton = document.getElementById('decimal');
decimalButton.addEventListener('click', (e) => {
    let current = screen.textContent;
    if (!current.includes('.')) {
        screen.textContent += decimalButton.textContent;
    }
    else {
        return;
    }
})

