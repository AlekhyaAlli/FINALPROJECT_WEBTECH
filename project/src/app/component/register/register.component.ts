import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registrationData;
private headers= new HttpHeaders().set("Content-Type","application/json")

  constructor(private http:HttpClient,private router:Router) { }
 
  ngOnInit() {
  }

  register(frm){
    console.log("function calling",frm.value);
  
    this.http.post("http://localhost:4906/api/register",frm.value,{headers:this.headers}) .subscribe( (data)  => {
      console.log(data);
      this.registrationData=data
     if(this.registrationData.status === 'ok'){
     this.router.navigate(['login'])
     }
     else{
      alert("InvalidLogin") 
     }
     
  }
  
  
  )
  
  
    }

}
