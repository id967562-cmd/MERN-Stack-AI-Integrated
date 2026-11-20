//* NOTE:-! is logical NOT 
//*Use to remove Tedious work 
//* Insted of using if(product==null || product == undefined || product == false)
//* write if(!product){ }



const express = require('express');
const app = express();
const port = 3004

const products = [
    {id:1,name:"Laptop",price:50000},
    {id:2,name:"Mouse",price:500}
];

app.get('/products/:id',(req,res)=>{
    //* Number():- use because url always arrive as strings , It convert that to numeric value.
    const id = Number(req.params.id);

    if(!Number.isInteger(id) || id <= 0){
        //* !Number.isInteger(id) --> mean id doesnot exits
        return res.status(400).json({
            message : "Invalid product ID"
        });
    }

    const product = products.find(p => p.id === id);
    //* p-->for each item

    if(!product){
        return res.status(404).json({
            message:"Product not found"
        })
    }
    res.status(200).json(product);
});

app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`)
})