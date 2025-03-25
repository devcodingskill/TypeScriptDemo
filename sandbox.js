// const character = 'Tanaka';
// console.log(character);
// const inputs = document.querySelectorAll('input');
// console.log(inputs);
// inputs.forEach(input => {
//   console.log(input);   });
/* Lesson 2 */
// let character = 'Tanaka';
// let age = 30;
// let isBlackBelt = false;
// const circ = (diameter: number) => {
//   return diameter * Math.PI;
// }
// console.log(circ(40));
/* Lesson 3 */
// Arrays   
var names = ['Tanaka', 'Suzuki', 'Yamada'];
names.push('Hiroshi');
// names.push(3); // Error
var numbers = [10, 20, 30, 40];
numbers.push(25); // OK       
// numbers.push('Shaun'); // Error
numbers[1] = 100; // OK
var mixed = ['Ken', 4, 'Taro', 8, 9]; // OK array can have different types need to be defined in the beginning 
// but should be avoided
//objects
var ninja = {
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
};
