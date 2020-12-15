
export class AdvertisementPreviewModel{
    IdAdvert: number;
    price: string;
    area: string;
    advertName: string;
    bathroomCount: number;
    bedroomCount: number;
    imageUrl: string;

    constructor (){
        this.IdAdvert = 0;
        this.price = "80000";
        this.area = "200";
        this.advertName = "Card title";
        this.bathroomCount =  1;
        this.bedroomCount = 2;
        
		let id = Math.floor(Math.random() * Math.floor( 350 ) ) ;
		this.imageUrl =  `https://picsum.photos/id/${id}/350/260`;
    }


    /*priceWithCommas (){
        this.price;
    }*/
    
    setValues (ad:any){
        this.IdAdvert = ad["idAdvert"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        this.price = ad["price"];
        this.area = ad["area"];
        this.advertName = ad["advertName"];
        this.bathroomCount = ad["bathroomCount"];
        this.bedroomCount = ad["bedroomCount"];
        return this;
    }
}
