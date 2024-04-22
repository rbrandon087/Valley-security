const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes/careersRoutes');
const quote = require('./routes/quoteRoute');


//calling express
const app = express();

//Middleware Setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



const corsOptions = {
    origin: '*',
    credentials: true, // Corrected spelling
    optionsSuccessStatus: 200 // Corrected property name
}

app.use(cors(corsOptions));
app.use('/', router);
app.use('/career', careerRouter);
app.use('/quote', quoteRouter);


const port = 4000;
const server = app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
