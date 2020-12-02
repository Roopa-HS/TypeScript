import{ HasFormatter } from '../interfaces/HasFormatter.js'
export class Payment implements HasFormatter{

    constructor(readonly recipient:string,private details:string, public amount:number){
    
    }
    format(){
        //this.client="somethong else";// we cant change values of readonly value inside or outside the class, just have access to read those
        return `${this.recipient} owes ${this.amount} for ${this.details}`
    }
}
