import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-ad-page',
	templateUrl: './ad-page.component.html',
	styleUrls: ['./ad-page.component.scss']
})
export class AdPageComponent implements OnInit {
	images = new Array();
	gallery = new Array();
	hours = new Array();    
	constructor() { }

	ngOnInit(): void {  
		this.generateSliderImages();
		this.generateGalleryImages();
		this.generateScheduleTimes();
	}
	
	generateGalleryImages() :void{
		for( let index = 0; index < 9; index++ ){
			let id = Math.floor(Math.random() * Math.floor( 150 ));
		
			this.gallery.push( `https://picsum.photos/id/${id}/350/260` );
		}
	}
	generateSliderImages(): void{
		for( let index = 0; index < 5; index++ ){
			let id = Math.floor(Math.random() * Math.floor( 150 ));
		
			this.images.push( `https://picsum.photos/id/${id}/1865/600` );
		}
	}
	
	generateScheduleTimes(): void{
		for( let index = 8; index <= 18; index++ ){
			if( index != 12 ){
				this.hours.push( formatDate( ( index - 2 ) * 3600 * 1000, 'hh:mm:ss a', 'en-GB' ) );
			}
		}
	}
}
