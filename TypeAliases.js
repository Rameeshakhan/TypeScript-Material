"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getUser(user) {
    return user;
}
getUser({ name: "John", email: 'john@gmail.com', isActive: true });
var myObj = {
    _id: ['dfgf'],
    name: 'e',
    email: 'e@email.com',
    isActive: false
};
myObj.email = 'email@email.com';
myObj._id.push('dhdgh');
myObj._id.pop();
console.log(myObj);
//  myObj._id = '3434' // wont be possible
