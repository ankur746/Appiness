import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user-service.service';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.less']
})
export class UserListComponent implements OnInit {
  userList: User[];
  constructor(
    private router: Router,
    private userSer: UserService
  ) { }

  ngOnInit() {
    this.serviceSub();
  }

  onAddUser() {
    this.router.navigate(['/UserRegister']);
  }

  serviceSub() {
    console.log('Project List Loading Started');
    this.userList = this.userSer.getUser();
    console.log('Project List Loaded ');
  }
}
