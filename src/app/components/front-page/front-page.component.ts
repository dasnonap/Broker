import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-front-page',
	templateUrl: './front-page.component.html',
	styleUrls: ['./front-page.component.scss']
})
export class FrontPageComponent implements OnInit {
	images = new Array();
	ads = new Array();
	constructor() { }

	ngOnInit(): void {
		this.generateAds();
		this.generateSliderImages();
	
	}
	
	generateAds(): void{
		for( let index = 0; index < 10; index++ ){
			let id = Math.floor(Math.random() * Math.floor(index*15));
			
			this.ads.push( `https://picsum.photos/id/${id}/286/121` );
		}
	}
	
	generateSliderImages(): void{
		for( let index = 0; index < 5; index++ ){
			let id = Math.floor(Math.random() * Math.floor(index*11));
		
			this.images.push( `https://picsum.photos/id/${id}/1865/600` );
		}
	
	}

}

