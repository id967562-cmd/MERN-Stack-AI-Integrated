function greet(){
    console.log("Hello Sagar");
}

function execute(callback){ //callback-parameter
    callback();      // calling a function which is callback

}

execute(greet);

//execute() call function start ---> compare callback() to greet(callback) -->greet callback() 
//                                                                                |
//                      greet execute the console.log()<---- compare the callback() to greet()                                                                                |


function downloadfile(callback){
    
    console.log("Downloading...");

    //Imagine downloading take time

    callback();
}

function finished(){
    setTimeout(() => {
        console.log("Download completed!");
    }, 2000);
    
}

downloadfile(finished);

//Callback with asynchronous code
const fs = require("fs");
console.log("Start");

fs.readFile("hello.txt","utf-8",(err,data)=>{
    console.log(data);
});
console.log("End");