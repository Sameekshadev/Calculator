let input = '0';
let operator = '';
let firstOperand = '';
let secondOperand = '';

function clearInput() {
    input = '0';
    operator = '';
    firstOperand = '';
    secondOperand = '';
    document.getElementById('input').innerText = input;
}

function addToInput(value) {
    if (input === '0') {
        input = '';
    }
    input += value;
    document.getElementById('input').innerText = input;
}

function setOperator(op) {
    operator = op;
    firstOperand = input;
    input = '0';
}

function calculate() {
    secondOperand = input;
    let result = '';
    switch(operator) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case '*':
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        case '/':
            result = parseFloat(firstOperand) / parseFloat(secondOperand);
            break;
    }
    document.getElementById('input').innerText = result;
    input = result.toString();
    operator = '';
    firstOperand = '';
    secondOperand = '';
}