import { bubbleSort } from "../Sort";

const array_1 = [1, 3, 6, 9, 5];
const array_2 = [6, 4, 2, 0, -1];

describe("bubble sort", () => {
  it("should sort the array", () => {    
    expect(bubbleSort(array_1)).toEqual(array_1.slice(0).sort());
  });

  it("should sort the array", () => {
    expect(bubbleSort(array_2)).toEqual(array_2.slice(0).sort());
  });
});
