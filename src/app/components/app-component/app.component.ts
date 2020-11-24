import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'brokerSite';
	isMenuOn = false;
	menuActiveClass = '';
    isActive():void {
    
		if ( this.isMenuOn ){
			this.menuActiveClass = '';
			this.isMenuOn = false;
		} 
		else{
			this.menuActiveClass = ' is-active';
			this.isMenuOn = true;
		}
	}
}