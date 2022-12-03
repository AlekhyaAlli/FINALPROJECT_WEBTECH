//importing Modules Main File In the BackEnd

var ex=require('express');
var mon=require('mongoose');
var bp=require('body-parser');
var cors=require('cors');
var app=ex();

const route=require('./route/routes');
//connecting to data base 

//mon.connect('mongodb://RamayyaRR:RamayyaRamya@ds155695.mlab.com:55695/hoteldata')


mon.connect('mongodb://localhost:27017/hoteldata')

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
app.listen(PORT,()=>{
console.log("Node server is Running at :"+PORT);
})