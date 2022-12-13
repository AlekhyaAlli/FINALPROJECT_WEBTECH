
import { Injectable } from '@angular/core';
// import{Http}from'@angular/http';
import { map } from 'rxjs/operators';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import{HttpClientModule} from '@angular/common/http' 
import{List2} from './list2'
@Injectable({
  providedIn: 'root'
})
export class DataService {
httpdata;
nor;
d
e
p
Adate
Ddate
//private headers= new HttpHeaders().set("Content-Type","application/json")

  constructor(private http:HttpClient) { }

  /*  getHotelData()
    {
      console.log("Function called")
       //return 
       this.http.post("http://localhost:4906/api/get_data")
  
       
     //.pipe(map(res=>res.json()))
  }*/
  page_load()
  {
   this.http.get("http://localhost:4906/api/on_Page_Load")

  }
setaDate(val)
{
  this.Adate=val.Adate
  this.Ddate=val.Ddate
}
getaDate()
{
 return this.Adate; 
}


getdDate()
{
 return this.Ddate; 
}
  setter(d)
  {console.log("Function called")
     
this.nor=d;

  }
  setter2(d2)
  {
    this.d=d2.deluxe
    this.p=d2.premium
    this.e=d2.executive
  }
  del()
  {
return this.d
  }
  exec()
  {
return this.e
  }
  
  prem()
  {
return this.p
  }
   getter()
   {
     return this.nor;
   }

   /* addHotelData(newList)
    {
       return this.http.post('http://localhost:4906/api/add_data',newList)
       .pipe(map(res=>res.json()));
    
    }*/

}
