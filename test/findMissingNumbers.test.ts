import { findDisappeared } from "../src/findMissingNumbers"

describe("test name validator function", () => {
    it("should return [5,6]", () => {
        expect(findDisappeared([4,3,2,7,8,2,3,1])).toEqual([5,6]);
    });
    it("should return [2]", () => {
        expect(findDisappeared([1,1])).toEqual([2]);
    });
});