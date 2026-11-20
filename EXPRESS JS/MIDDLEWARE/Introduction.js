const express = require("express");
const app = express();
const port = 3000;

app.use((req,res,next)=>{ //Used to create middleware 
    console.log("Request received!");
    next(); // next()--> It opening  the gate for the request to continue
});

app.get('/',(req, res) =>{
    res.send("Home page");
    
});

app.listen(port,()=>{
    console.log(`Server running at http://localhost:localhost${port}`);
})