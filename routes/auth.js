var express = require('express');
var router = express.Router();

router.get('/login', (req, res) => {
    res.send('ini halaman login')
  });

module.exports = router;
