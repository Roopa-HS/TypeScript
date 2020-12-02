export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        //this.client="somethong else";// we cant change values of readonly value inside or outside the class, just have access to read those
        return `${this.recipient} owes ${this.amount} for ${this.details}`;
    }
}
