//Define API routes (e.g., /api/quote, /api/resume).
const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    const userData = 
    [
      {
        "id": 1,
        "name": "Leanne Graham",
        "email": "Sincere@april.biz",
        "website": "hildegard.org"
      },
      {
        "id": 2,
        "name": "Ervin Howell",
        "email": "Shanna@melissa.tv",
        "website": "anastasia.net"
      },
      {
        "id": 3,
        "name": "Clementine Bauch",
        "email": "Nathan@yesenia.net",
        "website": "ramiro.info"
      }
    ]
    
    res.send(userData)
  })
  
  module.exports = router
