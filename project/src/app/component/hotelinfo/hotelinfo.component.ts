// import { HttpModule } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hotelinfo',
  templateUrl: './hotelinfo.component.html',
  styleUrls: ['./hotelinfo.component.css']
 
})
export class HotelinfoComponent implements OnInit {
nof;
d1
de=0;
pr=0;
ex=0;
Adate;
Ddate;
closeModal= false;
//id;
private headers= new HttpHeaders().set("Content-Type","application/json")

constructor(private http:HttpClient,private dase2:DataService,private router:Router) { }
AddData(frm)
{
  console.log("function calling",frm.value)
  
 this.http.post("http://localhost:4906/api/add_data",frm.value,{headers:this.headers})
 .subscribe( (data)  => {
       console.log(data)
       this.d1=data
       console.log(this.d1)
       if(this.d1!=0){
       alert("please Enter the data to Continue") 
       }
        else
         frm.reset();
         this.closeModal = true;
         this.router.navigate(['/hotelinfo']);
         alert("Room Booked Successfully Thankyou!!!") 
        
      
 }
 
 

 )
 this.closeModal = false;
}
/* makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
*/
//console.log(makeid());
  ngOnInit() {
    this.nof=this.dase2.getter();
     this.de=this.dase2.del();
     this.ex=this.dase2.exec();
     this.pr=this.dase2.prem();
    console.log( this.Adate=this.dase2.getaDate());
     console.log(this.Ddate=this.dase2.getdDate());
  //   this.id=this.makeid()
  this.closeModal = false;
    
      
     }



}
