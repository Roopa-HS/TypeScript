"use strict";
// class Invoice1 {                                  
//     readonly client:string;
//     private details:string;
//     public amount:number;
//     constructor(c:string, d:string, a:number){
//         this.client=c;
//         this.details=d;
//         this.amount=a;
//     }
class Invoice1 {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        //this.client="somethong else";// we cant change values of readonly value inside or outside the class, just have access to read those
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}
const invoice1One = new Invoice1('Roopa', "work on website", 30000);
const invoice2Two = new Invoice1('Pavi', "work on website", 34400);
let invoices1 = [];
invoices1.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
