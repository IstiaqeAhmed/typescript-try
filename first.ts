// let age: number = 89;
// age = 59;
// let club: string = 'RM'
// const isFamous: boolean = false;
// let famous: boolean;


// // function add(num1: number | string, num2: number | string) {
// //     return num1 + num2;

// // }
// // add(3, 76);
// // add(52, 'sand');

// function doubleItAndConsole(num: number): void {
//     const result = num * 2;
//     console.log(result);
// }

// const output = doubleItAndConsole(10);
// console.log('output', output);

// // functional typescript
// function fullName(firstName: string, lastName: string): string {
//     return firstName + ' ' + lastName;
// }

// const user: string = fullName('Ben', 'Ahmed');



// // arrow function typescript

// let multiply2: (x: number, y: number) => number;

// multiply2 = (x, y) => x * y;

// const multiply = (x: number, y: number): number => x * y;
// console.log(multiply(235, 6)
const numbers: number[] = [2, 3, 4, 5, 6, 34, 53];
numbers.push(22);

const friends: string[] = ['gina', 'hardy', 'Bill'];
let megaName: string = '';
for (let i = 0; i < friends.length; i++) {
    const friend: string = friends[i];
    if (friend.length > megaName.length) {
        megaName = friend;
    }
}
console.log('friend with the largest name', megaName);


// object 
// const friend = { 
//     name: 'Sansual cristofer',
//     age : 32
// }


// object type
let player: {
    club: string,
    salary: number
} = {
    club: 'Real Madrid',
    salary: 34354345,
}


const friend: { name: string, age: number } = {
    name: 'Sans christoper',
    age: 98
}

friend.age = 67;

// structure
interface Player {
    club: string,
    name: string,
    salary: number,
    wife?: string,
    isPlaying: boolean,
}


const messy: Player = {
    name: 'Messy',
    club: 'Real Madrid',
    salary: 4500000000,
    wife: 'some name',
    isPlaying: true
}

const rolando: Player = {
    name: 'Rolando',
    club: 'Liverpool',
    salary: 6575757577,
    wife: 'some name',
    isPlaying: true
}



function getBonus(player: Player, friend: string[]) {
    return player.salary * 0.1;
}
const poorPlayer = { age: 50, salary: 1000000 }

getBonus(messy, ['ricardo', 'timaru'])




class Person {
    name: string;
    private _partner: string;
    readonly fatherName: string;
    constructor(name: string, father: string) {
        this.name = name;
        this._partner = name;
        this.fatherName = father;
    }
    getName(): String {
        return this.name;
        return this.name + '' + this._partner;
    }
}

const sam = new Person('Sammy', 'David')
console.log('name', sam.name, sam.fatherName);
const samName: string = sam.getName();
sam.name = 'john';
