const express = require("express");
const app = express();
const port = 3002;

//Middleware : parse(Complex to simple) incoming JSON
app.use(express.json());

app.post('/users',(req,res)=>{ //post request created 
    console.log(req.body); // req.body()--> Handle or Interprete JSON body

res.send("User received successfully"); 

});

app.listen(port, ()=> {
    console.log(`Server running at http://localhost${port}`);
});
