//async - When you put async in front before a function,it return the Promise
async function greet() {
    return "Hello";
}
const result = greet()
console.log(result);

async function add() {
    return 10 + 20;
}
// promise.resolve(30)

add().then((result) => {
    console.log(result);
});

// await - Wait for this Promise to settle,then give me its result.
function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000);
    });
}
async function main() {
    console.log("A");
    const data = await getData();
    console.log(data);
    console.log("B");
}
main();
console.log("C");

// Error handling using await/async
async function main() {
    try{
        const data = await getData();
        console.log(data);
    }
    catch{
        console.log(error);
    }
}
main();