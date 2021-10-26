const express = require('express');
const mongoose = require('mongoose');

const app = express();
const routes = require('./routes/route');
mongoose.connect("mongodb+srv://dep_pre:dep_pre_123@cluster0.fpqao.mongodb.net/preDB?retryWrites=true&w=majority");
app.use(express.json());
app.use('/api', routes);

const port = 8000;
app.listen(port, ()=>{ console.log(`listening on port: ${port}`)})