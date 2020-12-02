//we can avoid code duplicates by creating user defined types(code reusability)

type StringorNum = string|number;
type objWithName ={name:String, uid:StringorNum};

let user1={
    name:"Roopa",
    uid:111
}


// const logDetails=(uid:String|number, item:String) //instead of this we can use as below

const logDetails =(uid :StringorNum, item:String) =>{
    console.log(`${item} has uid of ${uid}`);
}

//const greetings = (user:{name:String, uid:StringorNum})=>{

const greetings = (user:objWithName)=>{
    console.log(`${user.name} Says Hello!`);
}

const greetAgain  = (user:objWithName)=>{
    console.log(`${user.name} Says Hello Again!`);
}

logDetails(123,"samsung");

greetings(user1);
greetAgain(user1);
