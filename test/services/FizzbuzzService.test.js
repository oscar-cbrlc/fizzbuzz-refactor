const FizzbuzzService = require("./../../lib/services/FizzbuzzService");

describe("Tests for [applyValidationInExplorer]", () => {
    test("should set \"trick\" as score value", () => {
        const explorer = {name: "Explorer", score: 1};
        FizzbuzzService.applyValidationInExplorer(explorer);
        expect(explorer.trick).toEqual(1);
    });
    test("should set \"trick\" as \"FIZZ\"", () => {
        const explorer = {name: "Explorer", score: 3};
        FizzbuzzService.applyValidationInExplorer(explorer);
        expect(explorer.trick).toEqual("FIZZ");
    });
    test("should set \"trick\" as \"BUZZ\"", () => {
        const explorer = {name: "Explorer", score: 5};
        FizzbuzzService.applyValidationInExplorer(explorer);
        expect(explorer.trick).toEqual("BUZZ");
    });
    test("should set \"trick\" as \"FIZZBUZZ\"", () => {
        const explorer = {name: "Explorer", score: 15};
        FizzbuzzService.applyValidationInExplorer(explorer);
        expect(explorer.trick).toEqual("FIZZBUZZ");
    });
});


describe("Tests for [applyValidationInNumber]", () => {
    test("should set \"trick\" as score value", () => {
        const trick = FizzbuzzService.applyValidationInNumber(1);
        expect(trick).toEqual(1);
    });
    test("should set \"trick\" as \"FIZZ\"", () => {
        const trick = FizzbuzzService.applyValidationInNumber(3);
        expect(trick).toEqual("FIZZ");
    });
    test("should set \"trick\" as \"BUZZ\"", () => {
        const trick = FizzbuzzService.applyValidationInNumber(5);
        expect(trick).toEqual("BUZZ");
    });
    test("should set \"trick\" as \"FIZZBUZZ\"", () => {
        const trick = FizzbuzzService.applyValidationInNumber(15);
        expect(trick).toEqual("FIZZBUZZ");
    });
});