let age: number = 89;
age = 59;
let club: string = 'RM'
const isFamous: boolean = false;
let famous: boolean;


// function add(num1: number | string, num2: number | string) {
//     return num1 + num2;

// }
// add(3, 76);
// add(52, 'sand');

function doubleItAndConsole(num: number): void {
    const result = num * 2;
    console.log(result);
}

const output = doubleItAndConsole(10);
console.log('output', output);


function fullName(firstName: string, lastName: string): string {
    return firstName + ' ' + lastName;
}

const user: string = fullName('Ben', 'Ahmed');





let multiply2: (x: number, y: number) => number;

multiply2 = (x, y) => x * y;

const multiply = (x: number, y: number): number => x * y;
console.log(multiply(235, 6)