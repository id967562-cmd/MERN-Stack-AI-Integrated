const express = require('express');
const app = express();
const port= 5000;

const users = [
    {id: 1, name: "Sagar"},
    {id: 2, name: "Rahul"},
    {id: 3, name: "Aman"}
];

app.get('/users',(req,res)=>{
    const name = req.query.name; // req.query ---> query parameter which is used to get matched name 
    //.filter()-->returns an array containing every matching user.
    const result = users.filter(user=>user.name === name);
    res.json(result);
    res.json(users);

});

app.listen(port,()=>{
    console.log(`server is working on http://localhost${port}`);
})