var mon = require('mongoose');
const logininfo=mon.Schema({
    Email:{
        type:String,
        required:true
    
    },
    password:{
        type:String,
        required: true
    }
})
const loginDetails=module.exports=mon.model('loginDetails',logininfo);