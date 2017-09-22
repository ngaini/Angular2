
import {Component } from '@angular/core';

@Component({
	selector: 'data-binding-hw',
	templateUrl: './dataBindingHw.component.html'
})

export class DataBindingHw {

	username="";

	this.isEnabled(name){
		if(this.name.length> 0){
			return true;
		}
		else{
			return false;
		}
	}

	submitUserName(){
		this.username = '';

	};

}