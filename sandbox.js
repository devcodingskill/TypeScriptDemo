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
var character = 'Tanaka';
var age = 30;
var isBlackBelt = false;
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(40));
//#endregion
//#region : Lesson 3 */
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
//#endregion
//#region : Lesson 4 */
// Explicit types       
var character1 = 'Tanaka';
var age1;
var isLoggedIn;
console.log(character1);
// Arrays
var ninjas;
// Union types
var mixed1 = [];
mixed1.push('hello');
mixed1.push(20);
// mixed1.push(false); // Error
//no need to () for single type
var uid;
// Objects
var ninjaOne;
ninjaOne = { name: 'Yoshi', age: 30 };
// ninjaOne = 'hello'; // Error
var ninjaTwo;
ninjaTwo = { name: 'Ken', age: 20, beltColour: 'black' };
//#endregion
//#region : Lesson 5 */
// Dynamic (any) types  not recommended
// reverse typescript back to javascript
var age2 = 25;
age2 = true;
console.log(age2);
age2 = 'hello';
console.log(age2);
age2 = { name: 'Ken' };
console.log(age2);
var mixed2 = [];
mixed2.push(5);
mixed2.push('mario');
mixed2.push(false);
console.log(mixed2);
var ninja3;
ninja3 = { name: 'Yoshi', age: 25 };
//#endregion
