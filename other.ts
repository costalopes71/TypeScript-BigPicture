import {CustomerService} from "./classes"

console.log("Trying to use a class!")

let customerService = new CustomerService("Joao", 33);

console.log("Name: " + customerService.printCustomerName());