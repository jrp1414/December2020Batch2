
// Arrange
// Act
// Assert

import { TestBed } from "@angular/core/testing";
import { LoggerService } from "./logger.service";
let logger: LoggerService;
beforeEach(() => {
    TestBed.configureTestingModule({ providers: [LoggerService] });
});
describe("LoggerService", () => {
    it("Log Method test", () => {
        logger = TestBed.inject(LoggerService);
        expect(logger.log("Some Sample Data")).toBeUndefined();
    });
});