let char:string;
let id: number;
let isMale: boolean;

let keyt:string|number|boolean; //union types
let key1:(string|number|boolean);
key1=60;
key1=true;
console.log(key1);

// age="10"; //error
id=10;

//isLoggedIn=25;
isMale=true;

//in arrays
let arr:string[]=[];
arr.push("pavi")
console.log(arr);

let mixedArr:(string|number)[]=[];
// let mixedArr:string|number[]=[]; //error
mixedArr.push(10);
mixedArr.push("10");
// mixedArr.push(true); //error

//in objects
let student1:object;
student1 = {name:'Roopa', age:29, sub:'kan'};
console.log("Student data is"+ student1);


let student2:{
    name: string,
    age:number,
    beltcolor:string
}
student2 ={name:'Sachu', age:50, beltcolor:"black"};
// student2 ={name:'Sachu', age:50,beltcolor:"black", skills:"reading"};//error
 console.log(student2);



 //any type(dynamic)
 let age1:any=25;
 age1=true;
 age1='hello';
 age1= {name:'roops'};
 console.log(age1);


 //in arrays
 let array:any[] = [];
 array.push('ansaka');
 array.push(199);
 array.push(true);
 console.log(array);


 //in object
 let ninja:{name:any, age:any, beltcolor:any};

 ninja={name:'Roopa', age:40, beltcolor:"black"};
 console.log(ninja);

 ninja={name:10, age:"twenty", beltcolor:true};
 console.log(ninja);