import { EventEmitter } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { Store } from "@ngxs/store";
import { Observable, of } from "rxjs";
import { LoggerService } from "../services/logger.service";
import { Product } from "../services/product";
import { ProductService } from "../services/product.service";
import { ProductsComponent } from "./products.component";
const mockProducts: Product[] = [{
    "productId": 3,
    "productName": "Sample 1",
    "productCode": "TST-0001",
    "releaseDate": new Date(2017, 9, 20),
    "description": { "descText": "15 gallon capacity rolling garden cart", "emailId": "test@test.com" },
    "price": 32.99985,
    "starRating": 2,
    "currentAvailibility": false,
    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
}, {
    "productId": 4,
    "productName": "Sample 2",
    "productCode": "TST-0002",
    "releaseDate": new Date(2017, 9, 20),
    "description": { "descText": "15 gallon capacity rolling garden cart", "emailId": "test@test.com" },
    "price": 32.99985,
    "starRating": 2,
    "currentAvailibility": false,
    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
}];
class MockProductService {
    notify = new EventEmitter();
    getProducts() {
        return of(mockProducts);
    }
}
class MockLoggerService {
    log() {
        return "Logged";
    }
}
class MockStore {
    log() {
        return "Logged";
    }
}
let comp:ProductsComponent;
let productService: ProductService;
let loggerService: LoggerService;
let store:Store;
describe("Products Component", () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            // provide the component-under-test and dependent service
            providers: [
                ProductsComponent,
                { provide: ProductService, useClass: MockProductService },
                { provide: LoggerService, useClass: MockLoggerService },
                { provide: Store, useClass: MockStore }
            ]
        });
        // inject both the component and the dependent service.
        comp = TestBed.inject(ProductsComponent);
        productService = TestBed.inject(ProductService);
        loggerService = TestBed.inject(LoggerService);
        store = TestBed.inject(Store)

    });
    it('Products Length should be 2', () => {
        expect(comp.products.length).toEqual(2);
    });

    it('Product Id should be 3', () => {
        comp.ps.getProducts().subscribe((p)=>{
            expect(p[0].productId).toEqual(3);  
        });        
    });
});
