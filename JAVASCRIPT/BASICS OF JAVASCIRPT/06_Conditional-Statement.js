//For loop
for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//Using While loop
let i=1;
while(i<=5){
    console.log(i);
    i++;
}

//Using DO-While-Loop
console.log("Print the number:")
let a=1;
do{
    console.log(a);
    a++;
}
while(a<=5);

console.log("\n")

//**For-of-loop
const x=[1,2,3,4,5];
for(const item of x){
    console.log(item);
}

console.log("\n")

const str = "Hello";
for(const char of str){
    console.log(char);
}

const m= new Map([
    ["name","Akash"],
    ["age",25],
    ["city","Noida"]
]);

for(let[key,value] of m){
    console.log(`${key}:${value}`);
    
}
