"use strict";
var character = 'Roopa';
var age = 29;
var isBlackBelt = false;
//character=20; //we cant assign number to string-error 
character = 'hello';
//age='twenty'; //cant assign string to number type
age = 30;
//isBlackBelt='yes';//cant assign string to boolean
isBlackBelt = true;
console.log(character, age, isBlackBelt);
var circle = function (diameter) {
    return diameter * Math.PI;
};
console.log(circle('hello')); //NaN
console.log(circle(30));
//now the type of diameter is any, if we mention particular type ike Number then it will show error for passed string value
//in TS we can mention the type of argument it should accept as shown below
var circle1 = function (diameter1) {
    return diameter1 * Math.PI;
};
console.log(circle1('hello')); //NaN
console.log(circle1(20));
