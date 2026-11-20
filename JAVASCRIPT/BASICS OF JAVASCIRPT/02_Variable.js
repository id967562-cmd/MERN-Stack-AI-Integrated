// Var is global or fuctional scope , depend on decleration
var globalVar="I am global ";
console.log(globalVar);

function testVar(){
    var x=12;
    console.log(x);
}
testVar();
//console.log(x); // x is not accessible outside function scope

//Lets check global-scope/fucntion-scope/block-scope
let a='sagar';
var b='aman';
const c='gita'

function testCases(){
    let x=20;
    var y=45;
    const z=12;

    console.log(x)
    console.log(y)
    console.log(z)
    console.log(a)
    console.log(b)
    console.log(c)
}

testCases()


    // console.log(x) //cannot access 
    //  console.log(y) //cannot access
    //  console.log(z) //cannot access
    console.log(a)
    console.log(b)
    console.log(c)
    
    let emoji="\u{1F600}";
    console.log(emoji)