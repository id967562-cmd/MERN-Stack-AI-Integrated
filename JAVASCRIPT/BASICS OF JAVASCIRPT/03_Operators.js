let a=10; //can be re-assign
a=45;
console.log(a)

var b=20;  // can be re-assign
b=5;
console.log(b)

const c=10; // can not be re-assign
// c=9;
console.log(c)

//Arithmatic Operator
const sum = 4 + 5;           
const diff = 7-3;            
const p=5*7;
const q=8/2;
const r=3%2;
console.log(sum,diff,p,q,r);

//Assignment Operators
let n=10;
n += 5; // mean n=n+5
n *= 3;
console.log(n);

// Comparison Operator
console.log(10>2);
console.log(10=="10");
console.log( 5!=='5');
console.log(5!=='5');
console.log(5==='5');

//Logical Operator
const x=true,y=false;
console.log(x && y); //Logical AND
console.log(x || y); //Logical OR

// Ternary operator
const age = 18;
const status = age >= 18 ? "Adult" : "Minor";
console.log(status);

// let Marks = Number(prompt("Enter your Marks: "));
// let student = Marks >= 33 ? "Pass" : "Fail";
// console.log("status: ",student);

//Comma Operator
let n1,n2; //evaluate from left to right and return the value of rightmost operand
const res = (n1 =1 , n2 = 2 , n1+n2);
console.log(res);

//Unary Operators
let z=5;
console.log("z=",+z);
console.log(-z);

console.log(++z);
console.log(--z);

console.log(!z);
console.log(typeof(z));
console.log(delete (x));




