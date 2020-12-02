let greet: Function;


greet= () => {
    console.log("Welcome everyone");
}

//greet="hello";    //we declared greet as function so error

//we should use optional or default parameter at the end

//const add = (a :number, b:number , c?:number|string=10) //we cant use like this both optional and default
const add = (a :number, b:number , c?:number|string) =>{  //optional parameter 

    console.log(a + b);
    console.log(c);
}
add(2,3);
add(2,8,9);

//const add = (a :number, b:number , c?:number|string):void =>{  it will void in default when not return anything


const sub = (a :number, b:number , c:number|string =10) =>{ //default parameter is set as 10
console.log( a - b);

}
sub(3,2,'19');
sub(45, 20, 6);

const mul =(a:number , b:number):number =>{
    return a * b; // it will return number only as both a nd b are numbers but we have to mention explicitly to show the developers 
}
 let result = mul(2,3); 
 console.log(result);  