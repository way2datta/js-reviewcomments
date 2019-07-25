function execute(operand1, operand2, callbackOperation) {
    return callbackOperation(operand1, operand2);
}

function executeAddition(operand1, operand2) {
    return operand1 + operand2;
}

function executeSubtraction(operand1, operand2) {
    return operand1 - operand2;
}

function executeMultiplication(operand1, operand2) {
    return operand1 * operand2;
}

function executeDivision(operand1, operand2) {
    return operand1 / operand2;
}

console.log(execute(44,12, executeAddition));
console.log(execute(44,12, executeSubtraction));
console.log(execute(44,12, executeMultiplication));
console.log(execute(44,12, executeDivision));
