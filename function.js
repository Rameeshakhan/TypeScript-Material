"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
// In this it can be happen that you use num to use any builtin function for any types
// function addTwo(num){
//     num.toUpperCase() //should not be possibe right ?
//     return num + 2;
// }
console.log(addTwo(4));
function getUpper(value) {
    return value.toUpperCase();
}
console.log(getUpper('world'));
function signUpUser(name, email, password) { }
console.log(signUpUser('world', 'world', 'world'));
//giving default value 
function loginUser(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
}
console.log(loginUser('world', 'world'));
