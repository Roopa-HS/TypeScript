interface IsPerson{
    name: string;
    age: number;
    speak(a:string):void;
    spend(a:number):number;
}

const me: IsPerson={     //it will follow general sturcture of Isperson, we have define each property of Isperson here not able to add or remove the property=>error
    name: 'Roopa',
    age:30,
    speak(text:string):void{
        console.log(text);
    },
    spend(amount:number):number{
        console.log('I Spent',amount);
        return amount;
    }
};
console.log(me);

const greetPerson = (person:IsPerson)=>{ 
    console.log('hello', person.name);
}

//greetPerson({name:'sachin'}); //error we cant do like this
greetPerson(me);
