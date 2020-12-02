//Generics allows to create reusable block of code which can be used with different types

const addUID =(obj:object) => {
    let uid =Math.floor(Math.random()* 100);
    return {...obj,uid};
}

let docOne = addUID({name:'yogsi', age:40});
console.log(docOne);
//console.log(docOne.name); // it is showing error bcs we are passing only object so it dnt know what are the properties inside that object so we are using Template like below