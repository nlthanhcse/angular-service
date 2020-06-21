import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-user-inactive',
  templateUrl: './user-inactive.component.html',
  styleUrls: ['./user-inactive.component.css']
})
export class UserInactiveComponent implements OnInit {
  users: {name: string, status: string}[] = [];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.inactive_users;
  }

  setToActive(id: number) {
    this.userService.setToActive(id);
  }
}
