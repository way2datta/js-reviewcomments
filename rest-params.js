// "use strict";

// function multiply(multiplier) {
//   var length = arguments.length;
//   var numbers = Array(length > 1 ? length - 1 : 0);
//   var index = 1;

//   for (; index < length; index++) {
//     numbers[index-1] = arguments[index];
//   }

//   return numbers.map(function (element) {
//     return multiplier * element;
//   });
// }

// var output = multiply(2, 1, 2, 3);
// console.log(output); // [2, 4, 6]




//   'use strict';

// function print() {
//     var length = arguments.length;
//     var days = Array(length);
//     var index = 0;

// 	for (; index < length; index++) {
// 		days[index] = arguments[index];
// 	}

// 	console.log(days);
// }

// print('Monday', 'Tuesday', 'Wednesday');

function print(...days) {
    console.log(days);
}

print('Monday', 'Tuesday', 'Wednesday');


function multiply(multiplier, ...numbers) {
    return numbers.map(function (element) {
        return multiplier * element;
    });
}

var output = multiply(2, 1, 2, 3);
console.log(output);