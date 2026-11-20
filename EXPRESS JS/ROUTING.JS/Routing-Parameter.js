const express = require("express");
const app =  express();
const port = 3000;

app.get('/users/:id',(req,res)=>{
    res.send(`UserID is ${req.params.id}`);
})

app.get('/users/:userId/posts/:postId',(req,res)=>{
    res.json({
        user:req.params.userId,
        post: req.params.postId
        });
});

app.listen(3000,()=>{
    console.log(`Server running at http://localhost:${port}`)
})