import { race } from "../TortoiseVsHare";

const array_1 = [0, 32, 18];
const array_2 = [3, 21, 49];

describe("should return the time of the race in hh mm ss", () => {
    it("should return the right time", () => {
        expect(race(720, 850, 70)).toEqual(array_1);
    });

    it("should return the right time", () => {
        expect(race(80, 91, 37)).toEqual(array_2);
    });
});
