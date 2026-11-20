const express = require('express')
const app = express()

//*Import productRoutes from the routes folder 
const productRoutes = require('./routes/productRoutes');

//*Connect the router at the /products prefix
//*app.use()-->connects that collection to your application.
app.use('/products',productRoutes);

app.listen(3000,()=>{
    console.log("Server running on port 3000");
});