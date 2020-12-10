import { Component, HostListener } from '@angular/core';
import { faFacebook, faFacebookSquare, faInstagram, faLinkedinIn, faMailchimp, faYoutube, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { faCoffee, faEnvelope, faGrinHearts, faHandHoldingHeart, faHeartbeat, faHeartBroken, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	
})
export class AppComponent {

	constructor(private router: Router) {}
	
	title = 'brokerSite';
	activeId = 1;
	isMenuOn = false;
	menuActiveClass = '';
	faFacebook = faFacebookSquare;
	faLinkedIn = faLinkedinIn;
	faInstagram = faInstagram;
	faYoutube = faYoutube;
	faMail = faEnvelope;
	faLove = faHandHoldingHeart;
	url = '';
	
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
	
	ngOnInit() {
        this.url = this.router.url;
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