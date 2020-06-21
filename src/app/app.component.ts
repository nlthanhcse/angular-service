import {Component, Input, OnInit} from '@angular/core';
import {CounterService} from './service/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private counterService: CounterService) {
  }

  ngOnInit() {

  }

  get_set_active_counter() {
    return this.counterService.set_active_user_counter;
  }

  get_set_inactive_counter() {
    return this.counterService.set_inactive_user_counter;
  }
}
