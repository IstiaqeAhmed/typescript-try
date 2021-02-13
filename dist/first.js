"use strict";
let age = 89;
age = 59;
let club = 'RM';
const isFamous = false;
let famous;
// function add(num1: number | string, num2: number | string) {
//     return num1 + num2;
// }
// add(3, 76);
// add(52, 'sand');
function doubleItAndConsole(num) {
    const result = num * 2;
    console.log(result);
}
const output = doubleItAndConsole(10);
console.log('output', output);
function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
const user = fullName('Ben', 'Ahmed');
const multiply = (x, y) => x * y;
console.log(multiply(235, 6));
