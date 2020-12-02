"use strict";
// fucn signatures are like fucn templates we have to create fucn signature and can use those when we need
//Example1
let wish; //fucn signature returns void
wish = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
//Example2
let calc; //fucn signature returns number
calc = (num1, num2, word) => {
    if (word === "add") {
        return num1 + num2;
    }
    else {
        return num1 - num2;
    }
};
//Example3(in objects)
let user = {
    name: "Roopa",
    age: 56
};
let Details; //fucn signature
Details = (user) => {
    console.log(`${user.name} is ${user.age} years old`);
};
Details(user);
