"use strict";
//we can avoid code duplicates by creating user defined types(code reusability)
let user1 = {
    name: "Roopa",
    uid: 111
};
// const logDetails=(uid:String|number, item:String) //instead of this we can use as below
const logDetails = (uid, item) => {
    console.log(`${item} has uid of ${uid}`);
};
//const greetings = (user:{name:String, uid:StringorNum})=>{
const greetings = (user) => {
    console.log(`${user.name} Says Hello!`);
};
const greetAgain = (user) => {
    console.log(`${user.name} Says Hello Again!`);
};
logDetails(123, "samsung");
greetings(user1);
greetAgain(user1);
