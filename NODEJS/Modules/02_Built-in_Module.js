const os = require("os");

console.log("OS:", os.platform());
console.log("CPU:", os.cpus());
console.log("RAM:", os.totalmem());
console.log("Free RAM:", os.freemem());


console.log("========== SYSTEM INFORMATION ==========");



console.log("OS Type:", os.type());

console.log("Architecture:", os.arch());

console.log("Hostname:", os.hostname());

console.log("Home Directory:", os.homedir());

console.log("CPU Cores:", os.cpus().length);

const totalRAM = os.totalmem() / (1024 ** 3);
const freeRAM = os.freemem() / (1024 ** 3);

console.log("Total RAM:", totalRAM.toFixed(2), "GB");
console.log("Free RAM:", freeRAM.toFixed(2), "GB");

const uptime = os.uptime() / 3600;

console.log("System Uptime:", uptime.toFixed(2), "hours");

//==================url(Uniform Resource Locator)===============

const url=require("url");
const myUrl = new URL(
    "https://leetcode.com/problems/two-sum?id=123"
);
console.log(myUrl.hostname);
console.log(myUrl.pathname);
console.log(myUrl.searchParams.get("id"));

//========================Event=================
const EventEmitter = require("events");

const emitter = new EventEmitter();
emitter.on("login",()=>{
    console.log("User logged in!");
});
emitter.emit("login");

//=================crypto==================
const crypto = require("crypto");

const hash = crypto
          .createHash("sha256")
          .update("hello")
          .digest("hex");

console.log(hash);

//================Process================
console.log("Node version:",process.version);
console.log("Plateform:",process.platform);
console.log("Process ID:",process.pid);
console.log(process.argv)