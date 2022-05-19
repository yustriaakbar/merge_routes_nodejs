const express = require('express');
const app = express();

var rootRouter = require('./routes'); // panggil file index.js di folder route
app.use('/', rootRouter);

app.listen(3001, () => {
    console.log('Server started on port 3001');
})