const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();

app.set('view engine','ejs');
app.set('views','../views');

app.use(express.static(path.join(__dirname,'../style')));
app.use(express.static(path.join(__dirname,'../media')));

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
      console.log("MongoDb connected sucessfully !!!");
})
.catch((err)=>{
      console.log("MongoDb Connection failed");
});


app.get('/',(req,res)=>{
       res.render("index");
});

app.get('/food_blog',(req,res)=>{
    res.render("food_blog");
});

app.get('/signin',(req,res)=>{
    res.render('signin');
});

app.get('/adventure_blog',(req,res)=>{
    res.render('adventure_blog');
});

app.get('/notes_blog',(req,res)=>{
     res.render('notes_blog');
});

app.get('/office_blog',(req,res)=>{
     res.render('office_blog');
});

app.get('/blog',(req,res)=>{
    res.render('index');
});


const PORT = 3001;
app.listen(PORT,()=>{
        console.log(`Server is running on http://localhost:${PORT}`);
});