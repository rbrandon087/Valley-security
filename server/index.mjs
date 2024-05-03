import express, { response } from 'express';
import bodyParser from 'body-parser';

import { request } from "http";
import cors from "cors";

const app = express();

//Middleware for handling data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const PORT = process.env.PORT || 4000;

// CORS middleware configuration

app.use(cors());

app.get("/", (request, response) => {
    response.status(200).send({msg: "Hello!"});
})

app.post("/api/careers", (request, response) => {
    const { first_name, last_name, email, message, resume, phoneNumber } = request.body;
    console.log('Received data:', { first_name, last_name, email, message, resume, phoneNumber  })
    response.status(200).send({msg: "Data received!" });
})


app.listen(PORT , () => {
    console.log(`listening on port ${PORT}`);
})