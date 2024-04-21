//Define API routes (e.g., /api/quote, /api/resume).
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const phoneNumber = req.body.phoneNumber;
  const message = req.body.message;
  const resumeFile = req.file;

  console.log(name + ' | ' + email + ' | ' + phoneNumber + ' | ' + resumeFile);
  res.send('Message sent, thank you!');
});


  
  module.exports = router
