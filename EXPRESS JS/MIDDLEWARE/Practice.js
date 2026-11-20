const express = require("express");
const app = express();
const port = 3005

app.use(express.json());
app.post('/products',(req,res)=>{
    const {name,email} = req.body;
    if(!name || !email){
        return res.status(400).json({
            message:"Name and email are required"
        });
    }
    res.status(201).json({
        message:"User created successfully",
        user:{name,email}
    });
});
app.listen(port,()=>{
    console.log(`Server listen at http://localhost${port}`);
})