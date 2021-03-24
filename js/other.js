"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classes_1 = require("./classes");
console.log("Trying to use a class!");
let customerService = new classes_1.CustomerService("Joao", 33);
console.log("Name: " + customerService.printCustomerName());
