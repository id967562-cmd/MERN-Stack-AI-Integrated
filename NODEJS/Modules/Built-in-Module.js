// Built-in modules are modules already provided by Node.js.

// ==================== HTTP ====================

const http = require("http");
// require("http") loads Node.js's built-in HTTP module.

const server = http.createServer((req, res) => {
    // createServer() creates an HTTP server.
    // req = request received from the client/browser
    // res = response that we send back to the client

    res.end("Hello JavaScript!");
    // Sends the response and ends the response.
});

server.listen(3000);
// Start the server on port 3000.


// ==================== FILE SYSTEM ====================

const fs = require("fs");
// Load Node.js's built-in File System module.

fs.writeFileSync("hello.txt", "Hello Sagar!");
// Creates hello.txt and writes "Hello Sagar!" into it.
// If the file already exists, its old content is replaced.

const data = fs.readFileSync("hello.txt", "utf-8");
// Reads the content of hello.txt.
// "utf-8" converts the file data into readable text.

console.log(data);


// Add more content to the file
fs.appendFileSync("hello.txt", "\nHow are you?");
// Adds content at the end instead of replacing existing content.

console.log("Content appended!");

//========================fs content on browser===================

// const serv = http.createServer((req,res)=>{
//     const data = fs.readFileSync("hello.txt","utf-8");
//     res.end(data);
// });
// serv.listen(7050);

//=================PATH==============

// path--> Work with file and folder paths
const path = require("path");

const folderPath= path.join("users","sagar");  // path.join()-- join  users and sagar
fs.mkdirSync(folderPath,{recursive:true}); // create folder users/sagar


const filepath=path.join(folderPath,"data.txt"); //join users/sagar + data.txt
fs.writeFileSync(filepath,"Hello Sagar!");// write content in data.txt

console.log("Hello Sagar!");
console.log(filepath);

//==================OS(Operating System info)=============
const os = require("os");

console.log("OS",os.platform())
console.log("CPU:",os.cpus()); 
console.log("RAM:",os.totalmem());
console.log("Free RAM:",os.freemem());

const totalRAM = os.totalmem() / (1024 ** 3);
const freeRAM = os.freemem() / (1024 ** 3);

console.log("Total RAM:",totalRAM.toFixed(2),"GB"); // toFixed() ---> define no.of decimal you want like 4.67
console.log("free RAM:",freeRAM.toFixed(2),"GB");

//===================URL(Uniform Resource Locator)================
const url=require("url");
const myUrl = new URL(
    "https://leetcode.com/problems/two-sum?id=123"

// https://leetcode.com/problems/two-sum?id=123
// │       │           │               │
// │       │           │               └── Query parameter
// │       │           └────────────────── Path
// │       └────────────────────────────── Hostname
// └────────────────────────────────────── Protocol


);
console.log(myUrl.hostname);
console.log(myUrl.pathname);
console.log(myUrl.searchParams.get("id"));

