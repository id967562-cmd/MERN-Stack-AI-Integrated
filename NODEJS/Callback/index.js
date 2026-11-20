function greet(name){
    console.log("Hello,"+ name);
}

function processUser(callback){
    const userName = "Harry";
    callback(userName);
}

processUser(greet);


setTimeout(() => {
    console.log("My self is sagar singh");
}, 5000);

// document.getElementById("btn").addEventListener("click",function()){
//     console.log("Button clicked");
// }