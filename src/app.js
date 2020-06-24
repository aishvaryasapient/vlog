require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mainRouter = require('./routes');
const mongoose = require('mongoose');
const errorHandler = require('./error-handler');

const port = process.env.PORT || 8080
console.log(process.env.PORT);
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/api',mainRouter)
app.use(errorHandler);
// app.all('*', (req, res, next) => {
//     /*
//     res.status(404).json({
//       status: 'fail',
//       message: `Can't find ${req.originalUrl} on this server!`
//     });
//     */
//     const err = new Error(`Can't find ${req.originalUrl} on this server!`);
//     err.status = 'fail';
//     err.statusCode = 404;
    
//     next(err);
//   });
const connect = async (req,res)=>{
    try{
      await  mongoose.connect(process.env.ATLAS_URL,{useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:true,useCreateIndex:true})
    }catch(err){
        console.log('Mongoose Error',err)
    }
    app.listen(port,(req,res)=>{
        console.log(`app is running on port ${port}`)
    })
}

connect();