import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-cancelbooking',
  templateUrl: './cancelbooking.component.html',
  styleUrls: ['./cancelbooking.component.css']
})
export class CancelbookingComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router,private dase:DataService) { }

cancel(frm)

{
  var d1;
  console.log(frm.value)
return this.http.post("http://localhost:4906/api/mail_Status",frm.value).subscribe(data=>{
  console.log(data)
d1=data
this.check(d1);
}

)
}

check(d)
{
if(d.length!=0)
{
  this.router.navigate(['home'])
  alert("Room Canceled Successfully Thankyou!!!") 
}
else{
  alert("Please Enter the Correct Room ID and Email-Id")
}

}


  ngOnInit() {

    
    
    
    
    
  
    
  }

}
