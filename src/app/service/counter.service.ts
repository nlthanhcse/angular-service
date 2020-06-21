import {Input} from '@angular/core';

export class CounterService {
  @Input() set_active_user_counter = 0;
  @Input() set_inactive_user_counter = 0;

  increaseActiveToInactive() {
    this.set_inactive_user_counter++;
  }

  increaseInactiveToActive() {
    this.set_active_user_counter++;
  }
}
