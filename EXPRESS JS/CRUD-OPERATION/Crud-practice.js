const express = require('express')
const app = express()
const port = 3000

//* A built in middleware function in express that parses(complex->simple) 
//* incoming HTTP requests with JSON payloads.
app.use(express.json());

let products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" }
];

//*GET Request
app.get('/products/:id', (req, res) => {
    //first convert url(string) to number
    const id = Number(req.params.id);
    //Using logic here:-
    //Search for specific product inside the array
    const product = products.find(p => p.id === id)

    //Check if the specific product was NOT found
    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    res.status(200).json(product);

});

//*POST Request 

app.post('/products', (req, res) => {
    const name = req.body.name;
    if (!name) {
        return res.status(400).json(
            { message: "Product name is required" }
        )
    }

    const newproduct = {
        id: 3,
        name: name
    };

    products.push(newproduct);


    return res.status(201).json(newproduct);
})

//* DELETE Request

app.delete('/products/:id', (req, res) => {

    const id = Number(req.params.id);
    const product = products.find(p => p.id === id)

    if (!product) {
        return res.status(404).json(
            { message: "Product doesnot exist" }
        )
    }
    //* Keep products whose IDs are NOT equal to id
    products = products.filter(p => p.id !== id)
    console.log("Update products:", products)
    return res.status(204).json(products);
})

app.listen(port, () => {
    console.log(`Server running on port at http://localhost:${port}`);
});