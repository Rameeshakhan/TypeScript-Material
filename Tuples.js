"use strict";
// An Specialized Array with some restrictions
Object.defineProperty(exports, "__esModule", { value: true });
// const user: (string | number) [] = ['ere', 1]
var user;
user = ['ere', 1, false];
// the order metters here i.e. at 0th index there should be string , at 1 only umber and so on
// this usually use in api calls
var rgb = [255, 455, 6];
var newDetail = ['1fk', 434];
// the value order is restricted but the value itself is changable
newDetail[0] = 'ewrlesdfl';
newDetail.push('ss');
console.log(newDetail);
