import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserActiveComponent } from './user-active/user-active.component';
import { UserInactiveComponent } from './user-inactive/user-inactive.component';
import {UserService} from './service/user.service';
import {CounterService} from './service/counter.service';

@NgModule({
  declarations: [
    AppComponent,
    UserActiveComponent,
    UserInactiveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    UserService,
    CounterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
