import { Component, OnInit } from '@angular/core';
import {UserService} from '../service/user.service';
import {CounterService} from '../service/counter.service';

@Component({
  selector: 'app-user-active',
  templateUrl: './user-active.component.html',
  styleUrls: ['./user-active.component.css']
})
export class UserActiveComponent implements OnInit {
  users: {name: string}[] = [];
  constructor(private userService: UserService,) { }

  ngOnInit(): void {
    this.users = this.userService.active_users;
  }

  setToInactive(id: number) {
    this.userService.setToInactive(id);
  }
}
