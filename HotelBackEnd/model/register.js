var mon = require('mongoose');
const registerinfo=mon.Schema({
    firstName:{
        type:String,
        required:true
    
    },
    LastName:{
        type:String,
        required:true
    
    },
    Email:{
        type:String,
        required:true
    
    },
    password:{
        type:String,
        required: true
    }
})
const registerDetails=module.exports=mon.model('registerDetails',registerinfo);