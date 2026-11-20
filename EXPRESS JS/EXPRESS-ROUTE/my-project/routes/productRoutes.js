const express = require('express');
//*Creating a router
const router = express.Router();

//*router --> modular collection of middleware and routes.
router.get('/',(req,res)=>{
    res.send("All products");
});

router.get('/:id',(req,res)=>{
    res.send(`Product ID: ${req.params.id}`);
});

module.exports=router;