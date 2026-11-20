const express = require('express')
const app = express();
const port = 3002;

const users = [
    {id: 1, name: "Sagar"},
    {id: 2, name: "Rahul"},
    {id: 3, name: "Aman"}
];
app.get('/users/:id',(req,res)=>{
    const id = Number(req.params.id);
    const user = users.find(user => user.id == id);

    if(!user){
        return res.status(404).json({
            message:"User not found"
        });
    }
    res.json(user);
})

app.listen(port,()=>{
    console.log(`server listen at http://localhost${port}`)
})