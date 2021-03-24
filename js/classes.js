"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerService = void 0;
class GenericService {
}
class CustomerService extends GenericService {
    constructor(customerName, customerAge) {
        super();
        this.documentNumber = "357364048-20";
        this.customerName = customerName;
        this.customerAge = customerAge;
    }
    printCustomerName() {
        return this.customerName;
    }
    getCustomerAge() {
        return this.customerAge;
    }
    getDocumentNumber() {
        return this.documentNumber;
    }
    changeCustomerAge(newAge) {
        this.customerAge = newAge;
        this.writeLog("New age set: " + newAge);
    }
    writeLog(dataToLog) {
        console.log(dataToLog);
    }
}
exports.CustomerService = CustomerService;
// class CustomCustomerService extends CustomerService {
//     public customMethod(): void {
//         this.changeCustomerAge(90); // inherited method
//         console.log("inherited method called")
//     }
// }
