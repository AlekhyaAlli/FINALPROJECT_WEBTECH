import { Component, OnInit } from '@angular/core';
import { AuthserviceService} from '../../authservice.service';
import {RouterModule, Router} from '@angular/router';
import { BnNgIdleService } from 'bn-ng-idle';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loginStatus;
  constructor( public aS: AuthserviceService,private router:Router,private bnIdle:BnNgIdleService ) { }

  ngOnInit() {
  
    this.bnIdle.startWatching(360).subscribe((res) => {
      if (res) {
        alert("The session is going to expire");
        console.log('session expired');
        this.logout();
      }
    });
  }

  

  logout() {
    this.aS.logoutUser();
    this.router.navigate(['/login']);
   
  }
}
