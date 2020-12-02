"use strict";
const me = {
    name: 'Roopa',
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I Spent', amount);
        return amount;
    }
};
console.log(me);
const greetPerson = (person) => {
    console.log('hello', person.name);
};
//greetPerson({name:'sachin'}); //error we cant do like this
greetPerson(me);
