//#region:Lesson 1
// Lesson 1
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
