import { validName } from "../src/nameValidator"

describe("test name validator function", () => {
    it("should return true", () => {
        expect(validName("Angelina Kesya Putri")).toEqual(true);
    });
    it("should return true", () => {
        expect(validName("A. Kesya")).toEqual(true);
    });
    it("should return true", () => {
        expect(validName("A. K. Putri")).toEqual(true);
    });
    it("should return true", () => {
        expect(validName("Angelina K. Putri")).toEqual(true);
    });
    it("Must be 2 or 3 words", () => {
        expect(validName("Angelina")).toEqual(false);
    });
    it("Incorrect capitalization", () => {
        expect(validName("a. Kesya")).toEqual(false);
    });
    it("Cannot have: initial first name + word middle name", () => {
        expect(validName("A. Kesya Putri")).toEqual(false);
    });
    it("Last name cannot be initial", () => {
        expect(validName("A. Kesya P.")).toEqual(false);
    });
    it("words cannot end with a dot (only initials can)", () => {
        expect(validName("Angelina. Kesya Putri")).toEqual(false);
    });
});