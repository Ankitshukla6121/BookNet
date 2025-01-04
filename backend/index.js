import express from "express";
import {PORT,mongoDBURL} from "./.env";
import mongoose from 'mongoose';
import {Book} from "./models/bookModels.js";
import bookRoute from './routes/booksRoute.js';
import cors from 'cors';

const app= express();

app.use(express.json());


// option 1: allow all origin with default of cors(*);
app.use(cors());

// options 2: allow custom origins

// app.use(
//   cors({
//     origin:'http://localhost:3000',
//     methods:['GET','POST','PUT','DELETE'],
//     allowedHeaders:['Content-Type'],
//   })
// )

app.get("/",(req,res)=>{
    console.log(req);
    return res.status(243).send('welcome');
})

// app.listen(PORT,()=>{
//     console.log(`App is listening to port :${PORT}`);
// });
// Route for save a new Book


app.use('/books',bookRoute)

mongoose.connect(mongoDBURL)
.then(()=>{
 console.log('app connected to database');
 
app.listen(PORT,()=>{
    console.log(`App is listening to port :${PORT}`);
});
})
.catch((err)=>{
console.log(err);
});
