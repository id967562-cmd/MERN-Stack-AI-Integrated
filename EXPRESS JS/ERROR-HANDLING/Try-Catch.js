// When building APIs, errors are unavoidable. For example:
// - A user requests a product that doesn't exist.
// - The client sends invalid data.
// - Your database fails.
// - Your code throws an unexpected error
const express = require('express')
const app = express()
const port = 3000

app.get('/test',(req,res)=>{
    try {
        throw new Error("Database failed");
    }
    catch(error){
        return res.status(500).json({
            message:"Internal server error"
        });
    }
});
app.listen(3000)