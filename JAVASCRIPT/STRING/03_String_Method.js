// ** length - Returns the number of characters in string
let text ='Javascript'
console.log(text.length);

// ** toUpperCase() / toLowerCase()-Convert string to upper pr lower case
let name = 'Ali'
console.log(name.toUpperCase());
console.log(name.toLowerCase());

// **trim()- remove extra whitespace from both end
let input ="  Hello World  ";
console.log(input.trim());

// ** includes() - checks if a string contain another string
let msg ="Learn javascript";
console.log(msg.includes("Java"));
console.log(msg.includes("Python"));

// ** indexOf() / lastIndexOf() - Returns the index of the first/last occurrence of a substring
let str = 'banana'
console.log(str.indexOf("a"))
console.log(str.lastIndexOf("a"))

// ** startsWith() / endsWith()
let title = "Frontend Developer";
console.log(title.startsWith("Front"));
console.log(title.endsWith("Dev"));

// **repeat()-Repeat a string multiple times
let wow = "ha"
console.log(wow.repeat(3));

// **charAt(index) - Return the character at a specific position
let lang = "JavaScript"
console.log(lang.charAt(0))

// ** split(seperator) - split an string into array based on given seperator
let data = "HTML,CSS,JAVASCRIPT";
let parts = data.split(",");
console.log(parts);

// ** replace(old,new) - Replace the first occurrence of a substring
let massage = "I love Python";
console.log(massage.replace("Python","JavaScript"))

// ** substring(start,end) - Similar to slice() , but cannot accept negative indexes
let t = "Coding"
console.log(t.substring(0,3));

// **slice(start,end) - Extract part of a string .end is not included
let word="Javascript";
console.log(word.slice(0,4))
console.log(word.slice(4))



