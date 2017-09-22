import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WarningAlertComponent } from './warningAlert/warning.alert.component';
import { SuccessAlertComponent } from './successAlert/success.alert.component';
import { HomeworkComponent } from './homework/homework.component';
import {DataBindingHw} from './dataBindingHw/dataBindingHw.component';

@NgModule({
  declarations: [
      AppComponent,
      WarningAlertComponent,
      SuccessAlertComponent,
      HomeworkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
