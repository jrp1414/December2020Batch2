import { HttpErrorResponse } from "@angular/common/http";

import { TestBed } from "@angular/core/testing";
import { of, throwError } from "rxjs";
import { LoggerService } from "./logger.service";
import { Product } from "./product";
import { ProductService } from "./product.service";

let httpClientSpy: { get: jasmine.Spy };
let productService: ProductService;
let logger: LoggerService;
const expectedProducts: Product[] =
    [{
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
describe("Product Service", () => {
    beforeEach(() => {
        // TODO: spy on other methods too
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);
        TestBed.configureTestingModule({ providers: [LoggerService] });
        logger = TestBed.inject(LoggerService);
        productService = new ProductService(logger, httpClientSpy as any);
    }); 

    it('should return expected products (HttpClient called once)', () => {
        const expectedProducts: Product[] =
            [{
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

        httpClientSpy.get.and.returnValue(of(expectedProducts));

        productService.getProducts().subscribe(
            products => expect(products).toEqual(expectedProducts, 'expected Products'),
            fail
        );
        expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
    });

    it('should return an error when the server returns a 404', () => {
        const errorResponse = new HttpErrorResponse({
            error: 'test 404 error',
            status: 404, statusText: 'Not Found'
        });

        httpClientSpy.get.and.returnValue(throwError(errorResponse));

        productService.getProducts().subscribe(
            products => fail('expected an error, not products'),
            error => {
                expect(error.error).toContain('test 404 error');
            }
        );
    });
});

