import { Injectable } from '@angular/core';

// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/map';
// import { of } from 'rxjs';
import{Router} from '@angular/router'
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  private isloggedIn: boolean;
  logindata;
retUrl ="home";
private headers= new HttpHeaders().set("Content-Type","application/json")

  constructor(private http:HttpClient, private router: Router) {
      this.isloggedIn=false;
  }

  login(form) {

    this.http.post("http://localhost:4906/api/login",form.value,{headers:this.headers}) .subscribe((data)  => {
      console.log(data);
      this.logindata=data
     if(this.logindata.status === 'ok'){
      this.isloggedIn=true;
      this.router.navigate(['/home']);
      return this.isloggedIn;
  
     }
     else if(this.logindata.status === 'invalidpwd'){
      this.isloggedIn = false;
      alert("Invalid password") 
     
     }
     else{
      this.isloggedIn = false;
      alert("InvalidLogin") 
  
     }
    })
     
  
  }

  isUserLoggedIn(): boolean {
      return this.isloggedIn;
  }
  
  logoutUser(): void{
    this.isloggedIn = false;
}
}
