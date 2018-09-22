import { race } from "../TortoiseVsHare";

describe("should return the time of the race in hh mm ss", () => {
    it("should return the right time", () => {
        expect(race(720, 850, 70)).toEqual([0, 32, 18]);
        expect(race(80, 91, 37)).toEqual([3, 21, 49]);
    });
});
