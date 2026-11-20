const express = require('express');
const  app = express();
const path = require('path')
const port = 3005


app.set('view engine','ejs');

app.set('views',path.join(__dirname,'views'))

app.get('/',(req,res)=>{
    res.render('html',{
        username: 'Sagar'
    });
});

app.listen(port,()=>{
    console.log(`Server running on http://localhost:${port}`);
});