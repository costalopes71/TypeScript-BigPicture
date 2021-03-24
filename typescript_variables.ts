// type inferance

let userName = "Joao";
let age = 33;

// or

let lastName: string = "Lopes";
let documentNumber: number;

// if cannot infer, then is of type any

let anyValue; // variable of type any

// functions

function printFullName(firstName: string, lastName: string): string {
    return userName + " " + lastName;
}

function printFullNameWithTypeInferenceOnReturnType(fullName: string) {
    return fullName;
}

let fullName = printFullNameWithTypeInferenceOnReturnType("Joao Carlos");
// automatic infers string type to fullName variable
