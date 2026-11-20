const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')  
})

app.get('/about',(req,res)=>{
  res.send("About Express");
})

app.post('/', (req, res) => {
  res.send('Hello World!- This is a post request')
})

app.put('/', (req, res) => {
  res.send('Hello World!- This is a put request')
})

app.delete('/', (req, res) => {
  res.send('Hello World!- This is a delete request')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 