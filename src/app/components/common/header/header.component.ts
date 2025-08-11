import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  appMenuList = [
    { "name": "Home" },
    { "name": "Product" },
    { "name": "Report" },
    { "name": "Result" },
    { "name": "Administration" },
    { "name": "Setting" }
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

  constructor() {}
  ngOnInit(): void {}

}
