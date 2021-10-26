const express = require('express');
const mongoose = require('mongoose');

const app = express();
const routes = require('./routes/route');
mongoose.connect("mongodb://localhost:27017/apidb2");
app.use(express.json());
app.use('/api', routes);

const port = 8000;
app.listen(port, ()=>{ console.log(`listening on port: ${port}`)})