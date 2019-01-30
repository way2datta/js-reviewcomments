function sum() {
    let total = 0;
    for (let index = 0; index < arguments.length; index++) {
        const element = arguments[index];
        total += element;
    }
    return total;
}

function anotherSum() {
    let total = 0;
    for (const number of arguments) {
        total += number;
    }
    return total;
}
function declarativeSum() {
    const _ = require('lodash');
    return _.sum(arguments)
}

console.log(sum());
console.log(sum(1));
console.log(sum(1, 2));
console.log(anotherSum(1, 2, 3));
console.log(declarativeSum(1, 2, 3, 4));


