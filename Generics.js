"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function One(arg) {
    return arg;
}
//generic type , whenever it will receive the arg acc to that type it will lock that type 
function Two(val) {
    return val;
}
var two = Two(0);
function showType(arg) {
    return arg.name;
}
var e = showType({ name: "ram", email: "lfksdl" });
console.log(e);
// function having a generic type , taking geenric type array and return generic type value from the argumented array 
function getSearchProducts(products) {
    //do some operations
    var myIndex = 3;
    return products[myIndex];
}
// geenric syntax in arrow function 
// <T,> not a jsx syntax but a generic type -> common practice
var getProducts = function (products) {
    return products[0]; // returning product value in 0'th place of type T (generic)
};
var value = getProducts(["fgh0", "fthf", "tht"]);
console.log(value);
function myFunction(valueOne, valueTwo) {
    return {
        valueOne: valueOne,
        valueTwo: valueTwo
    };
}
var value2 = myFunction(true, "kl");
function myFunction2(valueOne, valueTwo) {
    return {
        valueOne: valueOne,
        name: "".concat(valueTwo.name, ", ").concat(valueTwo.email),
    };
}
var value3 = myFunction2(6, { name: "ema", email: "e@gmail.com" });
console.log(value3);


