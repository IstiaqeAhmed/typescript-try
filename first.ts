let age: number = 89;
age = 59;
let club: string = 'RM'
const isFamous: boolean = false;
let famous: boolean;


function add(num1: number | string, num2: number | string) {
    return num1 + num2;

}
add(3, 76);
add(52, 'sand');


function fullName(firstName: string, lastName: string): string {
    return firstName + ' ' + lastName;
}

const user: string = fullName('Ben', 'Ahmed');