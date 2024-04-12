const express = require('express')
const app = express()

//Define a route to quotes page

app.get('/contact', (req, res) => {
    res.send('Thank you for your contact');
});

//Setup Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});