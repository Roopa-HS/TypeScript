// fucn signatures are like fucn templates we have to create fucn signature and can use those when we need

//Example1

 let wish : (a:String, b:String)=>void; //fucn signature returns void

 wish=(name:String,greeting:String)=>{
     console.log(`${name} says ${greeting}`);
 }

 //Example2
 let calc :(a:number, b:number, c:string)=>number; //fucn signature returns number

 calc=(num1:number, num2:number, word:string)=>{
     if(word==="add"){
        return num1+num2;
     }
     else{
         return num1-num2;
     }
 }

 //Example3(in objects)
 let user={
    name:"Roopa",
    age:56
}

 let Details:(user:{name:string, age:number})=>void; //fucn signature
 type person={name:string,age:number}; //Type Aliases

 Details = (user:person) => {
     console.log(`${user.name} is ${user.age} years old`);
 }

Details(user);