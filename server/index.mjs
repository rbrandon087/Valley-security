import express, { response } from 'express';
import bodyParser from 'body-parser';
import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';

config();



const supabaseUrl = 'https://bpdtqdfcowkmxdgyphxb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJwZHRxZGZjb3drbXhkZ3lwaHhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUxNDMwNjksImV4cCI6MjAzMDcxOTA2OX0.aOMbgsePHBmeC02WkSgxSFjVpW838gNX_Wn3NjplwIs'; 

const supabase = createClient(supabaseUrl, supabaseKey);


import { request } from "http";
import cors from "cors";

const app = express();

//Middleware for handling data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 4000;

// CORS middleware configuration

app.use(cors());


app.post("/api/careers", async (request, response) => {
    const { firstName, lastName, email, message, resume, phone_number } = request.body;

    try {
        // Insert data into Supabase table
        const { data, error } = await supabase
            .from("Careers_Form")
            .insert([{ 
                first_name: firstName,
                last_name: lastName,
                email,
                message,
                resume,
                phone_number: phone_number
            }]);

        if (error) {
            throw error;
        }

        console.log('Data inserted into Supabase:', data);
        response.status(200).send({ msg: "Data received and inserted into Supabase!" });
    } catch (error) {
        console.error('Error inserting data into Supabase:', error);
        response.status(500).send({ error: "An error occurred while inserting data into Supabase." });
    }
});


app.listen(PORT , () => {
    console.log(`listening on port ${PORT}`);
})