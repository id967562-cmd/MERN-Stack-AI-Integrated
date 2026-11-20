const http=require("http");

const server = http.createServer((req,res)=>{
    console.log("Method:",req.method);
    console.log("URL:",req.url);
    console.log("Headers:",req.headers);

    res.statusCode =200;
    res.setHeader("Contend-type","application/json");

    res.end(JSON.stringify({
        success: true,
        message:"Hello from Node.js"
    }));
});

server.listen(3000,()=>{
    console.log("Server running on port 3000");
})