import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import Pusher from 'pusher';
import dbModel from "./dbModel.js"
import dbModel1 from './dbModel1.js';

//Requiring Dotenv 
import dotenv from 'dotenv';
dotenv.config();



// app config
const app=express();
const port = process.env.Port || 8080;



// middleware
app.use(express.json());
app.use(cors());

// DB config
const connection_url= process.env.MONGODB_API
mongoose.connect(connection_url,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology : true
}).then(()=>console.log("MongoDB is Connected...."))
   .catch((err)=>console.log(err));

mongoose.connection.once('open',()=>{
    console.log('DB connected')

 
});

//  api routers
app.get('/',(req,res)=> res.status(200).send("Hello World"));

app.post('/orders',(req,res) => {

    const body=req.body;

    dbModel.create(body, (err,data) =>{
        if(err){
            res.status(500).send(err);
        
        }else{
            res.status(201).send(data);
        }
    });

});

app.get('/sync',(req,res)=>{
    dbModel.find((err,data)=>{
        if(err){
            res.status(500).send(err);
        
        }else{
            res.status(201).send(data);
        }
    });
})

app.get('/',(req,res)=> res.status(200).send("Hello World"));

app.post('/users',(req,res) => {

    const body=req.body;

    dbModel1.create(body, (err,data) =>{
        if(err){
            res.status(500).send(err);
        
        }else{
            res.status(201).send(data);
        }
    });

});

// listen
app.listen(port, () => console.log('listening on Localhost: ${port}'));