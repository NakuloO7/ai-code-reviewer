const express = require('express');
const aiRoutes = require('./routes/ai.route')

const app = express();

app.get('/', (req, res)=>{
    res.send("Hello world!")
});

app.use('/ai', aiRoutes);

module.exports = app;