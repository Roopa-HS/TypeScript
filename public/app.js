import { Invoice } from './classes/invoices.js';
import { ListTemplate } from './classes/listTemplate.js';
import { Payment } from './classes/payments.js';
// let docOne:HasFormatter;
// let docTwo:HasFormatter;
// docOne=new Invoice('Roopa','web work',250);
// docTwo=new Payment('sachin','plumbing work',400);
// let docs: HasFormatter[]=[];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);
// const invoiceOne = new Invoice('Roopa', "work on website",30000);
// const invoiceTwo = new Invoice('Pavi', "work on website",34400);
//console.log(invoiceOne,invoiceTwo,invoiceThree);
//let invoices:string[]=[]; //now  only string values we can push into array of invoices
//invoices.push("hellooo"); 
// let invoices:Invoice[]=[];  //only objects which created using invoice will be allowed to push into array
// //invoices.push('hello');// error, it will not allow string values to push as it declared as object
// invoices.push(invoiceOne);
// invoices.push(invoiceTwo);
//console.log(invoices);
// invoiceOne.client="sachin"; //we are changing the values of object
// invoiceTwo.amount=4000;
// invoices.forEach(inv=>  {
//console.log(inv.client, inv.details, inv.amount,inv.format() ); //it s showing error for details as it is private but for fromat fucn it is not showing error as it is inside the class and private variables are accessed inside the class.
//this.client="somethong else"; //readonly
//     console.log(inv.client, inv.amount,inv.format() );
// });
// console.log(invoiceOne,invoiceTwo);
const form = document.querySelector('.new-item-form');
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
    // console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
    //    console.log(doc);
});
