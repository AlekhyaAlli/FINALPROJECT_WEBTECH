import { DataService } from './data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import{List}from './list'
import { AppComponent } from './app.component';
import { CancelbookingComponent } from './component/cancelbooking/cancelbooking.component';
import { UserdetailsComponent } from './component/userdetails/userdetails.component';
import { PromocodeComponent } from './component/promocode/promocode.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ReviewComponent } from './component/review/review.component';
import { HotelinfoComponent } from './component/hotelinfo/hotelinfo.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { HomeComponent } from './component/home/home.component';
import  {RouterModule,Routes} from '@angular/router';
import { TestComponent } from './test/test.component';
//import { HttpModule } from '@angular/http';
import{HttpHeaders,HttpClient, HttpClientModule} from '@angular/common/http'
const rou :Routes=[
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'gallery',
    component:GalleryComponent
  },
  {
    path:'hotelinfo',
    component:HotelinfoComponent
  },
  {
    path:'cancelbooking',
    component:CancelbookingComponent
  },
  {
    path:'review',
    component:ReviewComponent
  },
  
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  }

]
@NgModule({
  declarations: [
    AppComponent,
    CancelbookingComponent,
    UserdetailsComponent,
    PromocodeComponent,
    HeaderComponent,
    FooterComponent,
    ReviewComponent,
    HotelinfoComponent,
    GalleryComponent,
    HomeComponent,
    TestComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
   // HttpModule,
    RouterModule.forRoot(rou)

  
  
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
