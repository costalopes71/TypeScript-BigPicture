"use strict";
class Customer {
    constructor(name) {
        this.name = name;
    }
    announce() {
        return "Hello, my name is " + this.name;
    }
}
// create a new instance
let firstCustomer = new Customer("Alice");
let newH1 = firstCustomer.announce();
// change the text on the page
let webHeading = document.querySelector('h1');
webHeading.textContent = newH1;
