import { Component } from '@angular/core';

@Component({
    selector: 'homework-component',
    templateUrl: './homework.component.html'
})

export class HomeworkComponent {

    username ="";

    isDisbleButton() {
        if (this.username.length > 0) {
            return false;
        }
        else {
            return true
        }
    }

    submitName() {
        this.username = "";
    }
}

