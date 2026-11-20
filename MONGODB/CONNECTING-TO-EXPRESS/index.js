const express = require("express");
const app = express();
const { MongoClient } = require('mongodb');
const port = 3000;

//Connection Url with express
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

//Database Name
const dbName = 'collageDB';

app.get('/',async(req,res)=>{
    await client.connect();
    console.log('Connected successfully to server');

    const db = client.db(dbName);
    const collection = db.collection('students');
    const studentsData = await collection.find().toArray();
    console.log(studentsData);



    res.send("Hello World");
})

app.listen(port,()=>{
    console.log(`Example app listening on port${port}`)
})