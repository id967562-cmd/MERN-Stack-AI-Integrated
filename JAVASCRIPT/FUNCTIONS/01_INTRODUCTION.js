//**function
function greet(name){  //TODO:Function Syntax
    console.log("Hello\t" + name);
}
greet("sagar");//function call

//** Function - Deafult parameter
function Intro(name="Guest"){
    console.log("Hello " + name);
}
Intro();
Intro("Sagar");

//** function- Return statement
function add(a,b){
    return a + b ;
}
let result = add(5,6);
console.log("Result:\n",result)
