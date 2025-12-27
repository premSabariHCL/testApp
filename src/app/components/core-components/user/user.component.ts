import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../shared/common.service';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  userDataList: any;
  userRoleList: any;
  selectedRole: any;
  selectedUser: any;
  constructor(private services: CommonService) { }

  ngOnInit(): void {
    this.services.getUserAPI().subscribe((data: any) => {
      const seen = new Set();
      this.userRoleList = data.users.filter((item: any) => {
        const role = item?.role;
        if (!role || seen.has(role)) {
          return false;
        } 
        seen.add(role);
        return true;
      });
    });
  }
  handleRoleEvent(item: MatSelectChange): void {
    this.selectedRole = (item.value);
    if (this.selectedRole) {
      this.services.getRolebasedUser(this.selectedRole).subscribe((data: any) => {
        if (this.selectedRole === 'All') {
          this.userDataList = data.users;
        } else {
          this.userDataList = data.users.filter((user: any) => user.role === this.selectedRole);
        }
      });
    }
  }
  selectUser(user: any): void {
    this.selectedUser = user;
  }
}
