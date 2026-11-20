const express = require('express');
const app = express();
const port = 3000

app.get('/json', (req, res) => {
    res.json([{
        id: 1,
        name: "sagar"
    },
    {
        id: 2,
        name: "Rahul"
    }
    ]);
});
app.listen(3000,()=>{
    console.log("Server running on port 3000");
})
