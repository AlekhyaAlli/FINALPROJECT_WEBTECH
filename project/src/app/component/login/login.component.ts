import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree } from '@angular/router';
  import { AuthserviceService } from '../../authservice.service';
import { AuthGuardService } from '../../authguard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit {
  
logindata;
isUserLoggedIn = false;
retUrl ="home";
private headers= new HttpHeaders().set("Content-Type","application/json")

  constructor(private http:HttpClient,private router:Router,private auth:AuthserviceService) { }



  ngOnInit() {
 
  }
login(frm){

  this.auth.login(frm);
//   console.log("function calling",frm.value);

//   this.http.post("http://localhost:4906/api/login",frm.value,{headers:this.headers}) .subscribe( (data)  => {
//     console.log(data);
//     this.logindata=data
//    if(this.logindata.status === 'ok'){
//     this.isUserLoggedIn = true;

//    }
//    else if(this.logindata.status === 'invalidpwd'){
//     this.isUserLoggedIn = false;
//     alert("Invalid password") 
   
//    }
//    else{
//     this.isUserLoggedIn = false;
//     alert("InvalidLogin") 

//    }
   
   
// }




// )


//   }

}
 

}
