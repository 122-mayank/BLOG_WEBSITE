const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set('view engine','ejs');
app.set('views','../views');

app.use(express.static(path.join(__dirname,'../style')));
app.use(express.static(path.join(__dirname,'../media')));

// console.log("MONGO_URI:", process.env.MONGO_URI);


app.get('/',(req,res)=>{
       res.render("index");
});

app.get('/food_blog',(req,res)=>{
       res.render('food_blog');
});

app.get('/adventure_blog', (req,res)=>{
     res.render('adventure_blog');
});

app.get('/office_blog',(req,res)=>{
     res.render('office_blog');
});

app.get('/education_blog',(req,res)=>{
     res.render('education_blog');
});

const PORT = 3001;
app.listen(PORT,()=>{
        console.log(`Server is running on http://localhost:${PORT}`);
});