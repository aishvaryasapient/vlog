require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mainRouter = require('./routes');

const port = process.env.PORT || 8080
console.log(process.env.PORT);
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/api',mainRouter)
app.listen(port,(req,res)=>{
    console.log(`app is running on port ${port}`)
})