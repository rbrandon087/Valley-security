const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes/careersRoutes');
const quote = require('./routes/quoteRoutes');

// calling express
const app = express();


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
})

// Middleware Setup
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get("/", (request, response) => {
    response.status(200).send({msg: "hello world!"});
})

// Handle POST requests
app.post('/api/careers', (request, response) => {
    console.log(request.body);
    return response.send(200)
    // Handle the data and send an appropriate response
});

