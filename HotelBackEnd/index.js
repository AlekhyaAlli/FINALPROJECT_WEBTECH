//importing Modules Main File In the BackEnd

var ex=require('express');
var mon=require('mongoose');
var bp=require('body-parser');
var cors=require('cors');
var app=ex();

const route=require('./route/routes');
const { db } = require('./model/hoteldata');
const mongoose = require('mongoose');
//connecting to data basse

// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);
// mongoose.set('useUnifiedTopology', true);
mon.connect('mongodb://localhost:27017/hoteldata')
var database = mongoose.connection;

//checking Connection

mon.connection.on('connected',()=>{
    console.log("Connected Successfully");
})

//if not connected

mon.connection.on('error',()=>{
    console.log("Not Connected");

    
})

const PORT=4906;


//adding middle layer cors
app.use(cors());

//body parser
app.use(bp.json());
app.use(bp.urlencoded({extended:true}));

//api used for Routing 
app.use('/api',route);

//First page get loaded
app.get('/',(req,res)=>{
    res.send("Data is Displaying....");
})
// app.get('/login',(req,res)=>{
//     res.render("login");
// })
// app.get('/register',(req,res)=>{
//     res.render("register");
// })

// app.post("/register", async(req,res)=> {

// var fname = req.body.fname;
// var lname = req.body.lname;
// var email= req.body.email;
// var password = req.body.password;
// var data = {
//     "fname" : fname,
//     "lname": lname,
//     "email": email,
//     "password":password
// }
// database.collection('users').insertOne(data,(err,collection) =>{
// if(err){
//     throw err;
// }
// console.log("record inserted");
// })
// console.log("entered login");
// return res.redirect('signup_success.html')
// })

app.listen(PORT,()=>{
console.log("Node server is Running at :"+PORT);
})