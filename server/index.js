const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes/careersRoutes');
const quote = require('./routes/quoteRoutes');

// calling express
const app = express();

// Middleware Setup
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
    origin: '*',
    credentials: true,
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));


app.use('/careers', router); 
app.use('/quote', quote); 

app.get("/", (request, response) => {
    response.status(200).send({msg: "hello world!"});
})

// Handle POST requests
app.post('/careers', (req, res) => {
    console.log('Received POST request:', req.body);
    // Handle the data and send an appropriate response
});

app.listen(4000, () => {
    console.log('Server listening on port 4000');
})
