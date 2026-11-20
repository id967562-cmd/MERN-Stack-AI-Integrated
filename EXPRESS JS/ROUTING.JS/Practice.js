const express = require('express')
const app = express();
const port = 5000

app.get('/',(req,res)=>{
    res.send("welcome to my server");
})
app.get('/about',(req,res)=>{
    res.send("I am learning Express");
})
app.get('/users',(req,res)=>{
    res.json([
        {
            "id":1,
            "name": "Sagar"
        },
        {
            "id":2,
            "name":"Rahul"
        }
    ]);
});

app.post('/users',(req,res)=>{
    res.send("User created successfully");
})
app.delete('/users',(req,res)=>{
    res.send("User deleted successfully");
})
app.listen(5000,()=>{
    console.log(`server listen at http://localhost:${port}`)
})

