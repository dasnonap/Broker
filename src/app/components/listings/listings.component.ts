import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-listings',
	templateUrl: './listings.component.html',
	styleUrls: ['./listings.component.scss']
})
export class ListingsComponent implements OnInit {
	images = new Array();
	ads = new Array();
	constructor() { }

	ngOnInit(): void {
		this.generateAds();
		this.generateSliderImages();
	}
	
	generateAds(): void{
		for( let index = 0; index < 15; index++ ){
			let id = Math.floor(Math.random() * Math.floor( 350 ) ) ;
			this.ads.push( `https://picsum.photos/id/${id}/350/260` );
		}
	}
	
	generateSliderImages(): void{
		for( let index = 0; index < 5; index++ ){
			let id = Math.floor(Math.random() * Math.floor( 150 ));
		
			this.images.push( `https://picsum.photos/id/${id}/1865/600` );
		}
	}

}
