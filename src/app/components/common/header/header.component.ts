import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  appMenuList = [
    { "name": "Home", "url": "/lobby" },
    { "name": "Product", "url": "/product" },
    { "name": "Report", "url": "/report" },
    { "name": "Result", "url": "/result" },
    { "name": "Administration", "url": "/admin" },
    { "name": "User Management", "url": "/user" },
    { "name": "Setting", "url": "/setting" }
  ];
  personMenuList = [
    { "name": "My Account" },
    { "name": "Profile Management" },
    { "name": "Change/Forgot Password" }
  ];
  helpMenuList = [
    { "name": "Problem Report" },
    { "name": "User Manual" },
    { "name": "About Us" }
  ];
  powerMenuList = [
    { "name": "Sleep" },
    { "name": "Logoff" },
    { "name": "Restart" },
    { "name": "Shutdown" }
  ];

  constructor(private routes: Router) {}
  ngOnInit(): void {}

  handleURL(url: any) {
    console.log("URL: ", url);
    switch(url) {
      case '/lobby':
        this.routes.navigateByUrl('/lobby');
        break;
      case '/admin':
        this.routes.navigateByUrl('/admin');
        break;
      case '/user':
        this.routes.navigateByUrl('/user');
        break;
    }
  }

}
