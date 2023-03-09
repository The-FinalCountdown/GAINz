const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('bodyParser');


const app = express();
const db = require('./confi');
db.on('error',console.error.bind(console, 'connection error:'));
db.once('open',()=>{
    console.log('database connected');
});


app.use(bodyParser.json());
app.post('/users',(res,res)=>{
    const user = new user({
        name:req.body.name,
        email:req.body.email,
        password:req.password,
    });
})
user.save((err)=>{
    if(err){
        console.error(err);
        res.status(500).send('issue saving new user within the database');
    }else{
        res.status(200).send('new user saved successfully to database');
    }
});

app.get('/users',(req, res)=>{
    user.find({}, (err, users)=>{
        if (err){
            console.error(err);
            res.status(500).send('error retieving user from database');
        }else{
            res.status(200).json(users)
        }
    });
});

app.listen({PORT},()=>{
    console.log('Server listening on port***')
});