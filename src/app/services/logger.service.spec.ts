
// Arrange
// Act
// Assert

import { LoggerService } from "./logger.service";

describe("LoggerService", () => {
    it("Log Method test", () => {
        let ls = new LoggerService();
        expect(ls.log("Some Sample Data")).toBeUndefined();
    });
});