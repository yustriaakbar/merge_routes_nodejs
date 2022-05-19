var express = require('express');
var router = express.Router();

router.get('/user', (req, res) => {
    res.send('ini halaman user')
  });

module.exports = router;
