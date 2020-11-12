"use strict";
var char;
var id;
var isMale;
var keyt; //union types
var key1;
key1 = 60;
key1 = true;
console.log(key1);
// age="10"; //error
id = 10;
//isLoggedIn=25;
isMale = true;
//in arrays
var arr = [];
arr.push("pavi");
console.log(arr);
var mixedArr = [];
// let mixedArr:string|number[]=[]; //error
mixedArr.push(10);
mixedArr.push("10");
// mixedArr.push(true); //error
//in objects
var student1;
student1 = { name: 'Roopa', age: 29, sub: 'kan' };
console.log("Student data is" + student1);
var student2;
student2 = { name: 'Sachu', age: 50, beltcolor: "black" };
// student2 ={name:'Sachu', age:50,beltcolor:"black", skills:"reading"};//error
console.log(student2);
//any type(dynamic)
var age1 = 25;
age1 = true;
age1 = 'hello';
age1 = { name: 'roops' };
console.log(age1);
//in arrays
var array = [];
array.push('ansaka');
array.push(199);
array.push(true);
console.log(array);
//in object
var ninja;
ninja = { name: 'Roopa', age: 40, beltcolor: "black" };
console.log(ninja);
ninja = { name: 10, age: "twenty", beltcolor: true };
console.log(ninja);
