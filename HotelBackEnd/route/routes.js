var ex=require('express');
var router=ex.Router();
const Room=require('../model/hoteldata');
const loginDetails = require('../model/userinfo');
const registerDetails = require('../model/register');
const moment=require('moment');
const { json } = require('body-parser');


//retriving data from data base

router.post('/login',async (req,res,next)=>{
    try{
    console.log("entered login");
    var useremail = req.body.Email;
    var password = req.body.pwd;
    const user = await registerDetails.findOne({Email:useremail});
    console.log(user.password);

    if(user.password === password){
        console.log("email");
        res.json({status:'ok'})
    }
    else{
        res.send({status:"invalidpwd"})
    }
    } catch(error){
        res.send({status:"invaliemail"})
    }
});

router.post('/register',(req,res,next)=>{
    console.log("entered register");
    var firstName = req.body.fname;
    var lastName = req.body.lname;
    var email = req.body.Email;
    var password = req.body.pwd;
    let NewData = new registerDetails({
        firstName:req.body.fname,
        LastName : req.body.lname,
        Email:req.body.Email,
        password : req.body.pwd
        
    })
    
   NewData.save((err,data)=>{
       
       if(err)
       res.json(err)
       else{
        res.json({status:'ok'});
       console.log("Data inserted")   
    }
})

})

router.get('/get_data',(req,res,next)=>{
   Room.find(function(err,data){
     if(err)
     res.json(err)
     else
     res.json(data)
 })
})

  //getting Edate data for checking 
   router.post('/get_Edate_data',(req,res,next)=>{
     var edate=[]//array fro stroing database data
      var adate;//for storing form date
      var edate1;//for storing the array of dates to single varaible
      var f=0;//flag variable
      var d=0;//days variable
     adate=moment(req.body.Adate)//form date
    // console.log(adate)//change the form date to moment 
    Room.find({},{Edate:1,_id:0},function(err, data) 
    {
        if(err)
        res.json(err)
        else
    {//adding database Edata to array
       edate=data;
       for(let i=0;i<edate.length;i++)
    {
      edate1=moment(edate[i].Edate);//change the date to moment  
      d=adate.diff(edate1,'days');//extracting no of days from given dates
        if(d>0)//checking the no days 
    {
         f++
         d=0
     }//closing  if
    }//loop closing
    if(f>0)//checking the flag variable for displaying no of rooms
      console.log(f+"Rooms Available") 
      else
      console.log("Sorry no rooms available!!! ")   
      res.status(200).json(f)  
    }//closing else
   })
  })

  //getting data for checking no of rooms free  
  router.get('/get_Noofrooms_data',(req,res,next)=>{
    var data1=[]//array for storing database data
    var adate;//for storing form date
    var edate1;//for storing the array of dates to single varaible
    d1=0;
    e=0;
    p=0;
    adate=moment(req.body.Adate)//form date
    
   Room.find(function(err, data) 
   {
       if(err)
       res.json(err)
       else
   {//adding database data to array
      data1=data;
 
      for(let i=0;i<data1.length;i++)
   {
    edate1=moment(data1[i].Edate);//change the date to moment  
    d=adate.diff(edate1,'days');//extracting no of days from given dates
     if(d>0||data1[i].Status=="InActive")  
      {   
    if(data1[i].Roomtype=="Premium")//checking room type
        {
            p++
       }
        else if(data1[i].Roomtype=="Executive")
       {
           e++
       } 
       else{
           
        d1++
       }
    
    }//closing  if
   }//loop closing
     res.status(200).json({deluxe:d1,executive:e,premium:p})  
   }//closing else
  })
 })


 router.get('/on_Page_Load',(req,res,next)=>{
    var data1=[]//array for storing database data
    var adate;//for storing form date
    var edate1;//for storing the array of dates to single varaible
    d1=0;
    e=0;
    p=0;
    adate=moment(new Date())//form date
    
   Room.find(function(err, data) 
   {
       if(err)
       res.json(err)
       else
   {//adding database data to array
      data1=data;
 
      for(let i=0;i<data1.length;i++)
   {
    edate1=moment(data1[i].Edate);//change the date to moment  
    d=adate.diff(edate1,'days');//extracting no of days from given dates
     if(d<0 && data1[i].Status=="Active")  
      {   
      
     Room.findOneAndUpdate({'_id':data1[i]._id},{Status:"InActive"},function(err,data)
{
    if(err)
    res.json(err)
    else
{
   res.json(data)       
}

      })
    }
}
   }

      })
 })


//adding data into the database
router.post('/add_data',(req,res,next)=>{
    console.log("Data insertion")   
    var e=0;
    let NewData = new Room({
        _id:req.body._id,
        Sdate:req.body.Sdate,
        Edate:req.body.Edate,
        Roomtype:req.body.Roomtype,
        Uname:req.body.Uname,
        Email:req.body.Email,
        Noa:req.body.Noa,
        Noc:req.body.Noc,
        Amount:12000,
        Status:"Active"
    })
    
   NewData.save((err,data)=>{
       
       if(err)
       res.json(err)
       else{
       res.json(e)
       console.log("Data inserted")   
    }
   })
   
})
//update status_data
router.post('/update_statusdata',(req,res,next)=>{
    id2=req.body.id;//form data
    console.log(id2)
    var id1=[];//databasedata
    Room.findOneAndUpdate({'_id':id2},{Status:"InActive"},function(err,result){
      if(err)
      res.json(err)
      else{
          res.json(result)
      }
    })
})*//*
//Updating data into the database
router.put('/update_data/:id',(req,res,next)=>{
   Room.findOneAndUpdate({_id:req.params.id},{$set:{
    Sdate:req.body.Sdate,
    Edate:req.body.Edate,

    Roomtype:req.body.Roomtype,
    Uname:req.body.Uname,
    Email:req.body.Email,
    Noa:req.body.Noa,
    Noc:req.body.Noc,
    Amount:req.body.Amount,
    Status:req.body.Status
   }},
   function(err,result){
       if(err)
       res.json(err)
       else
       res.json(result)
   })
})

// // Deleting data from the database
//    router.delete('/delete_data',(req,res,next)=>{
//     res.send("Data is deleted from the database");
//  })

    // create reusable transporter object using the default SMTP transport
    // var transporter = nodemailer.createTransport({
    //     host: 'smtp.gmail.com',
    //     port: 587,
    //     secure: false, // true for 465, false for other ports
    //     auth: {
    //         user: 'miraclerr4906@gmail.com', // generated ethereal user
    //         pass: 'Ramya@Ramayya4906' // generated ethereal password
    //     }
    // });

	
	// var mailOptions = {
    //     from: 'Miracle Royal Rooms ', // sender address
    //     to: 'miraclerr4906@gmail.com, ', // list of receivers
    //     subject: 'Miracle Royal Rooms', // Subject line
    //     text: ' Room Cancelled Successfully', // plain text body
    //     html: '<b>Your Room Cancelled Successfully!!!</b>' // html body
    // };
	

//   router.post('/mail_Status',(req,res,next)=>{
//     id2=req.body.id;//form data
//     Email1=req.body.Email
//     console.log(req.body.Email)
//     Room.findOneAndUpdate({$and:[{'_id':id2} ,{'Email':Email1}] },{Status:"InActive"},function(err,result){
   
     
//         if(err){
//             res.status(500).json({msg:err})
//         }
//         else
//         {
// 	      var mail = Email1;
// 		  console.log(mail);
// 			var mailOptions1 = {
//         from: 'Miracle Royal Rooms', // sender address
//         to: mail , // list of receivers
//         subject: 'Miracle Royal Rooms', // Subject line
//         text:'Id:'+id2,
//         html:'Dear Customer, <center><br>Your Room Has Been Successfully cancelled Thankyou For using our service,Please Visit agian..</center>' // plain text body
//         // html body
//     };
			
// 	transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             return console.log(error);
//         }
//         console.log('Message sent: %s', info.messageId);
//         // Preview only available when sending through an Ethereal account
//        // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));


//     });


//      transporter.sendMail(mailOptions1, (error, info) => {
//         if (error) {
//             return console.log(error);
//         }
//         console.log('Message sent: %s', info.messageId);
//         // Preview only available when sending through an Ethereal account
//        // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));


//     });


//             res.status(200).json({msg:result})
//         }

    //})

   
 // });
  
  
  
  
 

//exportiing modules to use in the entire Application
module.exports=router;
