var mon = require('mongoose');
//collection for user data and room data
const rooms=mon.Schema({
    _id:{
        type:Number,
        required:true
    },
    Sdate:{
        type:Date,
        required:true
    },
    Edate:{
        type:Date,
        required:true
    },
    Roomtype:{
        type:String,
         required:true
    },
    Uname:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    
    },
    Noa:{
       type:Number,
       required:true
    },
    
    Noc:{
        type:Number,
        required:true
     },
     Amount:{
         type:Number,
         required:true
     },
     Status:{
         type:String,
         required:true
     }
});/*

//collection for room status
const nor=mon.Schema({
    //rooms available in deluxe
    Rad:{
    type:Number,
    required:true
        
    },
    //rooms Filled in deluxe
    
    Rfd:{
        type:Number,
        required:true
            
        },
        //rooms available in Executive
    
        Rae:{
            type:Number,
            required:true
                
            },
            //rooms  Filled  in Executive
    
            Rfe:{
                type:Number,
                required:true
                    
                },//rooms  available  in Premium
    
                Rap:{
                    type:Number,
                    required:true
                        
                    },
                   // rooms  Filled  in Premium
    
                Rfp:{
                    type:Number,
                    required:true
                        
                    }
                                            
    
    })
*/   
const Room=module.exports=mon.model('Room',rooms);

//const Nor=module.exports=mon.model('Nor',nor);