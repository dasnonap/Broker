import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
	images = new Array();
	constructor() { }

	ngOnInit(): void {
		this.generateSliderImages();
	}
	
	generateSliderImages(): void{
		for( let index = 0; index < 1; index++ ){
			let id = Math.floor(Math.random() * Math.floor( 150 ));
		
			this.images.push( `https://picsum.photos/id/${id}/1865/600` );
		}
	}
}
