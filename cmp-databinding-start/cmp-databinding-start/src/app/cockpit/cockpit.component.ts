import {Component, OnInit, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';


@Component({
	selector: 'app-cockpit',
	templateUrl:'./cockpit.component.html',
	styleUrls: ['./cockpit.component.css']
})

export class CockpitComponent implements OnInit{

 	
	@Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
	@Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
	// newServerName = '';
 //  	newServerContent = '';
 	@ViewChild('serverNameInput') serverNameInput: ElementRef; 
 	@ViewChild('serverContentInput') serverContentInput: ElementRef; 
	constructor(){}

	ngOnInit(){

	}

	onAddServer(element:HTMLInputElement) {
		console.log(this.serverContentInput.nativeElement.value);
  		console.log(this.serverNameInput.nativeElement.value);
	    // this.serverCreated.emit({
	    //   serverName: this.newServerName,
	    //   serverContent: this.newServerContent
	    // });
  	}

  	onAddBlueprint() {
  		console.log(this.serverContentInput.nativeElement.value);
  		console.log(this.serverNameInput.nativeElement.value);

	    // this.blueprintCreated.emit({
	    //   serverName: this.newServerName,
	    //   serverContent: this.newServerContent
	    // });
  	}
}