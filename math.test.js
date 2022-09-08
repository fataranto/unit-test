import { it, expect } from "vitest";
import { add, removeNumbers } from "./math";

// add

it("should add all the numbers of the array", () => {
    const result = add([1, 2, 3]);
    expect(result).toBe(6);
});

it('should return a 0 if array is empty', () => {
    const result = add([]);
    expect(result).toBe(0);
});

// removeNumbers

it('should remove the elements from the first array', () => {
    const result = removeNumbers([1, 2, 3], [1]); // [2, 3]
    expect(result).toEqual([2, 3]);
});

it('should remove the elements from the first array provided we have multiple numbers to be removed in the second parameter', () => {
    const result = removeNumbers([1, 2, 3], [1, 2]); 
    expect(result).toEqual([3]);
});

it('should return an empty array if all the element presents in the array 1 are in the array 2', () => {
    const result = removeNumbers([1, 2, 3, 1, 1, 2, 2, 3, 3], [1, 2, 3]); 
    expect(result).toEqual([]);
});

it('should mantain the same array 1 if none of the numbers are present in the array 2', () => {
    const result = removeNumbers([1, 2, 3], [4]); 
    expect(result).toEqual([1, 2, 3]);
});


