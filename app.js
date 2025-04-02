const express=require('express');
const path=require('path');
const router=express.Router();
const app=express();
const bodyParser=require('body-parser');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:false}));

app.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'views','EntryPage.html'));
});

app.post('/',(req,res,next)=>{
    console.log(req.body);
    res.sendFile(path.join(__dirname,'views','Users.html'));
    res.redirect('/users');
});

app.get('/users',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'views','Users.html'));
});

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404page.html'));
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});