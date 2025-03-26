//#region:Lesson 1

//let character = 'Tanaka';
//console.log(character);

//const inputs = document.querySelectorAll('input');
//console.log(inputs);

// inputs.forEach(input => {
//     console.log(input);
// });
//#endregion;

//#region : Lesson 2 */
let character = 'Tanaka';
let age = 30;
let isBlackBelt = false;

const circ = (diameter: number) => {
  return diameter * Math.PI;
}

console.log(circ(40));
//#endregion
//#region : Lesson 3 */



// Arrays   
let names = ['Tanaka', 'Suzuki', 'Yamada'];

names.push('Hiroshi');
// names.push(3); // Error

let numbers = [10, 20, 30, 40];
numbers.push(25);   // OK       
// numbers.push('Shaun'); // Error
numbers[1] = 100; // OK


let mixed = ['Ken', 4, 'Taro', 8, 9]; // OK array can have different types need to be defined in the beginning 
// but should be avoided


//objects

let ninja = {
  name: 'Tanaka',
  belt: 'black',
  age: 30
};

ninja.age = 40; // OK
// ninja.age = 'string'; // Error
ninja = {
  name: 'Yamada',
  belt: 'orange',
  age: 20
}
//#endregion

//#region : Lesson 4 */
// Explicit types       
let character1: string='Tanaka';
let age1: number;           
let isLoggedIn: boolean;
console.log(character1);
// Arrays
let ninjas: string[];


// Union types
let mixed1: (string | number)[] = [];
mixed1.push('hello');
mixed1.push(20);
// mixed1.push(false); // Error

let uid: string | number;

// Objects
let ninjaOne: object;
ninjaOne = { name: 'Yoshi', age: 30 };
// ninjaOne = 'hello'; // Error

let ninjaTwo: {
  name: string,
  age: number,
  beltColour: string
};

ninjaTwo = { name: 'Ken', age: 20, beltColour: 'black' };
//#endregion
