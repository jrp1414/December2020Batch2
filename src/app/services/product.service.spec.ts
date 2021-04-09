import { LoggerService } from "./logger.service";
import { ProductService } from "./product.service";

describe("Product Service", () => {
    let ps: ProductService;
    beforeAll(() => {
        ps = new ProductService(new LoggerService());
    });

    // beforeEach(() => {
    //     ps = new ProductService(new LoggerService());
    // }); 

    it("getProducts should be defined", () => {
        // let ps: ProductService = new ProductService(new LoggerService());
        expect(ps.getProducts()).toBeDefined(); 
    });

    it("getProducts should be of length 6", () => {
        // let ps: ProductService = new ProductService(new LoggerService());
        expect(ps.getProducts().length).toBe(6);
    });

    it("getProduct should return the Garden Cart", () => {
        // let ps: ProductService = new ProductService(new LoggerService());
        expect(ps.getProduct(3).productName).toBe("Garden Cart");
    });
});