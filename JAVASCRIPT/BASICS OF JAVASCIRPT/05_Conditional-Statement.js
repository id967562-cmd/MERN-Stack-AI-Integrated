// if Statement
const a = 23;
if (a > 0) {
    console.log("This number is positive");
}

//if-else Statement
let num = -10
if (num > 0) {
    console.log("This number is positive.")
}
else {
    console.log("The number is negative.")
}

//Switch-case Statement
let b = 3;

switch (b) {
    case 0:
        console.log("The number is zero.")
        break;
    case 1:
        console.log("Number is one");
        break;
    case 2:
        console.log("Number is two.");
        break;
    default:
        console.log("Number is greater than 2.");
}

//Conditional Operator
let x = 10;
let result=x >= 0?"Positive":"Negative";
console.log(`The number is ${result}`)