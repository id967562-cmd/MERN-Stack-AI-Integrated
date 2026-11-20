//* 1)Named function
function greet(){
    return "Hello world!"
}
console.log(greet());

// ** 2)Anonymous function - Function without name
const print = function(){  
    return "Hi there!";
};
console.log(print());

// ** Function Expression - function created as part of an expression(stored) and assigned to a variable or pass to another funciton.
const addition=function(a,b){
    return a*b;
}
console.log(addition(2,3));

// ** Arrow Function[ES6]- function - shorter way
const square = n => n*n;
console.log(square(5));

//IIFE-Immediatly invoked Function Expression
(function(){
    console.log("This runs immediately!");
})();

// ** Callback function-pass an argument to another function and is executed
function num(n,callback){
    return callback(n);
}
const double = (n) => n*2;
console.log(num(5,double));//function call

// ** Constructor Function-special type of function used to create multiple objects with same structure-with NEW keyword.
function Person(name,age){
    this.name=name;
    this.age=age;
}

const user = new Person("Neha",22);
console.log(user.name);
console.log(user.age);

// ** Recursive Function
function factorial(n){
    if(n===0)return 1;
    return n*factorial(n-1);
}
console.log(factorial(5));