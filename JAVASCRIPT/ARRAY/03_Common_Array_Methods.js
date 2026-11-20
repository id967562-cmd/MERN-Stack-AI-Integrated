let color=['Red','Yellow','Green','Blue']
// ** push()
color.push('Brown')
console.log(color);

// ** pop()-remove last element
color.pop();
console.log(color)

// **shift()-Remove first item
color.shift();
console.log(color)

// **unshift()-Add item at the beginning
 color.unshift('pink')
 console.log(color)

// **toString()-convert given value to string seperated by comma
let  a=['HTML','CSS','JS','REACT'];
a.toString();
console.log(a);

// ** join()-join by "|"
let b=["HTML","CSS","JS","REACT"];
console.log(b.join('|'));

// ** delete - used to delete value of an object,array.
let emp={
    firstName:"Riya",
    lastName:"Kaur",
    salary:40000
}
console.log(delete emp.salary);
console.log(emp);

// **concat() - link two or more array
let a1=[11,12,13];
let a2=[14,15,16];
let a3=[17,18,19];
let newArr = a1.concat(a2,a3);
console.log(newArr)

// ** flat() - used to flatten the array
const x=[['1','2'],['3','4','5',['6'],'7']];
const y=x.flat(Infinity);
console.log(y);

// ** value() - use to itrate new Array that contain value for each index
const h = ["Apple", "Banana", "Cherry"];
const res = h.values();

for (const value of res) {
    console.log(value);
}

// ** reverse() - reverse the order of element in an array.
let g = [1,2,3,4,5];
g.reverse();
console.log(g);

// ** reduce() - Many array element->one result
let nums = [10,20,30,40];
let sum = nums.reduce((acc,curr) =>{
    return acc + curr;
},0);

console.log(sum);

// **slice() - Give me piece of array
let num =[10,20,30,40,50];
let result = num.slice(1,4);
console.log(result)

// **splice - modifies[add, ] the original array
let fruits=['Apple','Banana','Mango','Orange'];
fruits.splice(1,2);
console.log(fruits); // Remove element

fruits.splice(2,0,'Grapes')
console.log(fruits);

fruits.splice(1,1,'avacardo')
console.log(fruits)

console.log(fruits.indexOf('Mango'))
console.log(fruits.indexOf('Apple'))
console.log(fruits.includes('Banana'))