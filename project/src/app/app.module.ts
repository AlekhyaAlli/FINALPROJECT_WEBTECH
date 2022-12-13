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
import{HttpHeaders,HttpClient, HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { NavComponent } from './component/nav/nav.component';
import{ AuthserviceService } from './authservice.service';
import {ValidateEqualModule} from 'ng-validate-equal';
import { AuthGuardService } from './authguard.service';


const rou :Routes=[
  {
    path:'home',
    component:HomeComponent,
    canActivate: [AuthGuardService]
  },
  {
    path:'gallery',
    component:GalleryComponent,
    canActivate: [AuthGuardService]
  },
  {
    path:'hotelinfo',
    component:HotelinfoComponent,
    canActivate: [AuthGuardService]
  },
  {
    path:'cancelbooking',
    component:CancelbookingComponent
  },
  {
    path:'review',
    component:ReviewComponent,
    canActivate: [AuthGuardService]
  },
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'nav',
    component:NavComponent
  },
  {
    path:'',
    redirectTo:'login',
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
    TestComponent,
    LoginComponent,
    RegisterComponent,
    NavComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ValidateEqualModule,
   // HttpModule,
    RouterModule.forRoot(rou)

  
  
  ],
  providers: [DataService,AuthserviceService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
