import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-about-page',
	templateUrl: './about-page.component.html',
	styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {
	images = new Array();
	agents = new Array();
	partners = new Array();
	constructor() { }

	ngOnInit(): void {
		this.generateSliderImages();
		this.generateAgents();
		this.generatePartners();
	}
	
	generateSliderImages(): void{
		for( let index = 0; index < 1; index++ ){
			let id = Math.floor(Math.random() * Math.floor( 150 ));
		
			this.images.push( `https://picsum.photos/id/${id}/1865/600` );
		}
	}
	
	generateAgents(): void{
		for( let index = 0; index < 6; index++ ){
			let id = Math.floor(Math.random() * Math.floor( 50 ));
			
			this.agents.push( `https://picsum.photos/id/${id}/150/150` )
		}
	}
	
	generatePartners(): void{
		for( let index = 0; index < 5; index++ ){
			let id = Math.floor(Math.random() * Math.floor( 50 ));
			
			this.partners.push( `https://picsum.photos/id/${id}/150/150` )
		}
	}

}
