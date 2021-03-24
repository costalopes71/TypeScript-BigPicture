"use strict";
// type inferance
let userName = "Joao";
let age = 33;
// or
let lastName = "Lopes";
let documentNumber;
// if cannot infer, then is of type any
let anyValue; // variable of type any
// functions
function printFullName(firstName, lastName) {
    return userName + " " + lastName;
}
function printFullNameWithTypeInferenceOnReturnType(fullName) {
    return fullName;
}
let fullName = printFullNameWithTypeInferenceOnReturnType("Joao Carlos");
// automatic infers string type to fullName variable
