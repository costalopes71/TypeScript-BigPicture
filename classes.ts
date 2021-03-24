abstract class GenericService {
    
    public abstract printCustomerName(): string;

}

class CustomerService extends GenericService {

    // by default access modifiers are PUBLIC

    private customerName: string;
    private customerAge: number;
    private readonly documentNumber: string = "357364048-20";

    constructor(customerName: string, customerAge: number) {
        super();
        this.customerName = customerName;
        this.customerAge = customerAge;
    }

    public printCustomerName(): string {
        return this.customerName;
    }

    public getCustomerAge() {
        return this.customerAge;
    }

    public getDocumentNumber(): string {
        return this.documentNumber;
    }

    protected changeCustomerAge(newAge: number): void {
        this.customerAge = newAge;
        this.writeLog("New age set: " + newAge);
    }

    private writeLog(dataToLog: any) {
        console.log(dataToLog);    
    }

}

class CustomCustomerService extends CustomerService {

    public customMethod(): void {
        this.changeCustomerAge(90); // inherited method
        console.log("inherited method called")
    }

}