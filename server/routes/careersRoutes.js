//Define API routes (e.g., /api/quote, /api/resume).
const express = require('express');
const router = express.Router();

router.post('/api/careers', (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const phoneNumber = req.body.phoneNumber;
  const message = req.body.message;
  const resumeFile = req.file;

  console.log(firstName + ' | ' + lastName + ' | ' + email + ' | ' + phoneNumber + ' | ' + message + ' | ' + resumeFile);
  res.send('Message sent, thank you!');
});


  
  module.exports = router
