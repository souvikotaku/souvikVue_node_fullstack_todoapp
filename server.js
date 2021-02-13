const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express()
const mongoose = require('mongoose');
require('dotenv').config();

//middlewares
app.use('/uploads',express.static('uploads'));
app.use(cors());
app.use(express.json());


// mongo uri important boilerplate
//ATLAS_URI is the uri that i got from my mongo atlas, written on the env file
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


//api routes
const todoRouter = require('./routes/todolist');

app.use('/todolists', todoRouter);

//handle production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/dist'))
  app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
  })
}


const port = process.env.PORT || 5003;


app.listen(port,()=>{
    console.log('the server has started')
})