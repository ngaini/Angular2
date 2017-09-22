
import { Component } from '@angular/core';

// define component name tempateUrl and style
@Component({
    selector: 'app-success-alert',
    templateUrl: './success.alert.component.html',
    styles: [`
      
      p{
        color: green
      }
    `]
})
//export our component so that it can be imported by other   files
export class SuccessAlertComponent {
}