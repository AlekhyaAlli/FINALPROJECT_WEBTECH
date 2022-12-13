import { List2 } from '../../list2';
// import { HttpModule } from '@angular/http';
import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {RouterModule, Router} from '@angular/router'
import{map} from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
httpdata;
d1;
d2
private headers= new HttpHeaders().set("Content-Type","application/json")


//private Data:DataService,
  constructor( private http:HttpClient,private router:Router,private dase:DataService) {
   }
 
addDate(form)
{
    console.log(form.value.Adate)
      this.http.post("http://localhost:4906/api/get_Edate_data",form.value)//,{headers:this.headers})
       .subscribe( (data)  => {
        this.d1=data;  
        this.dase.setter(this.d1);
        this.dase.setaDate(form.value)
      this.check(this.d1);
         console.log(data);
         console.log("rooms Available")
         },(err)=>{
        console.log(err);
       
       }   
     
       ) 
       this.http.get("http://localhost:4906/api/get_Noofrooms_data").subscribe((data1)=>
      {
        this.d2=data1;
        this.dase.setter2(this.d2)
      },(err)=>{
        console.log(err)
      
      }
    )     

 }
  check(d1)
  {
    console.log(d1)
    if(d1>0)
  this.router.navigate(['/hotelinfo'])
  else
  alert("Sorry No rooms are available please visit Us again!!!")
  }
  ngOnInit() {
   }

}
