import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AdvertisementPreviewModel } from 'src/app/models/advertisement';
import { AdvertsService } from 'src/app/services/adverts-service.service';

@Component({
	selector: 'app-listings',
	templateUrl: './listings.component.html',
	styleUrls: ['./listings.component.scss']
})
export class ListingsComponent implements OnInit {
	images = new Array();
	ads : AdvertisementPreviewModel[] = [];

	private subscription:Subscription;
	
	constructor(private advertsService: AdvertsService) {
		this.subscription = new Subscription();
	 }

	ngOnInit(): void {
		this.generateAds();
		this.generateSliderImages();
	}
	
	async generateAds(): Promise<void>{
		await this.advertsService.getAdvertPreviews().toPromise().then((response: JSON[]) => {
			response.forEach (ad => this.ads.push(new AdvertisementPreviewModel().setValues(ad))); 
		  },
		  (errorResponse: HttpErrorResponse) => {
			console.log(errorResponse);
		  })

		  for( let index = 0; index < 15 - (this.ads.length-2); index++ ){
			this.ads.push(new AdvertisementPreviewModel());
		}

		
	}
	
	generateSliderImages(): void{
		for( let index = 0; index < 5; index++ ){
			let id = Math.floor(Math.random() * Math.floor( 150 ));
		
			this.images.push( `https://picsum.photos/id/${id}/1865/600` );
		}
	}

	getImageUrl(ad: AdvertisementPreviewModel) : string			//нужно за подаване на URL на снимката
	{
		return ad.imageUrl;
	}

}
