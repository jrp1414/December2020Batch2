export class Product {
    constructor(public productId: number, public productName: string, public productCode: string, public releaseDate: Date,
        public price: number, public starRating: number, public imageUrl: string, public description?: Description,
        public currentAvailibility?: boolean) {

    }
}
export class Description{
    constructor(public descText:string,public emailId:string) {
        
    }
}


