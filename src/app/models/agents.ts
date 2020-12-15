export class Agents {
    idUser: number
    firstName: string;
    lastName: string;
    imageUrl: string
    constructor(){
        this.idUser = 0;
        this.firstName = "Brittany";
        this.lastName = "Watkins";

        let id = Math.floor(Math.random() * Math.floor( 350 ) ) ;
		this.imageUrl = `https://picsum.photos/id/${id}/350/260` ;
    }

    

}