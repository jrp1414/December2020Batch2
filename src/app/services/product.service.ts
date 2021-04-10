import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoggerService } from './logger.service';
import { Product } from './product';

@Injectable({
    providedIn: "root"
})
export class ProductService {

    notify: EventEmitter<any> = new EventEmitter();
    constructor(private ls: LoggerService, private http: HttpClient) {

    }

    getProducts() {
        return this.http.get(`${environment.apiUrl}/GetProducts`);
        // return productList;
    }

    getProduct(id: number): Product {
        return productList.find((p) => p.productId == id);
    }

}





const productList: Product[] = [
    {
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": new Date('6/06/1986'),
        "description": {
            "descText": "Leaf rake with 48-inch wooden handle.",
            "emailId": "test@test.com"
        },
        "price": 19.95,
        "starRating": 1,
        "currentAvailibility": true,
        "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    },
    {
        "productId": 2,
        "productName": "Test Prod",
        "productCode": "GDN-0012",
        "releaseDate": new Date(2016, 10, 25),
        "description": {
            "descText": "Leaf rake with 48-inch wooden handle.",
            "emailId": "test@test.com"
        },
        "price": 19.95,
        "starRating": 1,
        "currentAvailibility": false,
        "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    },
    {
        "productId": 3,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": new Date(2017, 9, 20),
        "description": { "descText": "15 gallon capacity rolling garden cart", "emailId": "test@test.com" },
        "price": 32.99985,
        "starRating": 2,
        "currentAvailibility": false,
        "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    },
    {
        "productId": 5,
        "productName": "Hammer",
        "productCode": "TBX-0048",
        "releaseDate": new Date(2016, 10, 25),
        "description": { "descText": "Curved claw steel hammer", "emailId": "test@test.com" },
        "price": 0,
        "starRating": 3,
        "currentAvailibility": true,
        "imageUrl": "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    },
    {
        "productId": 8,
        "productName": "Saw",
        "productCode": "TBX-0022",
        "releaseDate": new Date(2016, 10, 25),
        "description": { descText: "15-inch steel blade hand saw", "emailId": "test@test.com" },
        "price": 11.55787878,
        "starRating": 6,
        "currentAvailibility": true,
        "imageUrl": "https://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
    },
    {
        "productId": 10,
        "productName": "Video Game Controller",
        "productCode": "GMG-0042",
        "releaseDate": new Date(2016, 10, 25),
        "description": { descText: "Standard two-button video game controller", "emailId": "test@test.com" },
        "price": 35.957878,
        "starRating": 5,
        "currentAvailibility": true,
        "imageUrl": "https://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
    }
];