export class Invoice {
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
