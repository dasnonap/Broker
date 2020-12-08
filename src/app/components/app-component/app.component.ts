import { Component, HostListener } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	
})
export class AppComponent {
	title = 'brokerSite';
	activeId = 1;
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
	
	@HostListener('window:scroll', [])
	onWindowScroll() {
	    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
	    if (scrollOffset >= 500) {
	        document.querySelectorAll('.controllable').forEach((c) => {
	            c.classList.add('bg_color');
	            c.classList.remove('bg-transparent');
	        });
	        
	        document.querySelectorAll('.controlable-logo').forEach((c) => {
	            c.classList.add('medium_logo');
	        });
	    } else {
	        document.querySelectorAll('.controllable').forEach((c) => {
	            c.classList.add('bg-transparent');
	            c.classList.remove('bg_color');
	        });
	        
	        document.querySelectorAll('.controlable-logo').forEach((c) => {
	            c.classList.remove('medium_logo');
	        });
	    }
	}
}