const express = require('express')
const app = express()
const port = 3001

app.get('/test',(req,res,next)=>{
    try{
        throw new Error("Something failed");
    }catch(err){
        next(err);
    }
});

//*Keep the error handler after your routes
app.use((err,req,res,next)=>{
    console.error(err.message);
    ``
    res.status(500).json({
        Message:"Something went wrong"
    });
});

app.listen(3001,()=>{
    console.log(`Server run at http://localhost:${port}`)
})