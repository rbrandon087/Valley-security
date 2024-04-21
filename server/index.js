const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

//calling express
const app = express();

//Middleware Setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const careerRoutes = require('./routes/CareerRoutes'); // Import career routes
const quoteRoutes = require('./routes/quoteRoutes'); // Import quote routes

const corsOptions = {
    origin: '*',
    credentials: true, // Corrected spelling
    optionsSuccessStatus: 200 // Corrected property name
}

app.use(cors(corsOptions));

// Use the routers for their respective paths
app.use('/careers', CareerRoutes);
app.use('/quotes', quoteRoutes);

const port = 4000;
const server = app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
