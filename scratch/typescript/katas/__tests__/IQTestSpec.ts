import { iqTest, iqTestCool } from '../IQTest';

describe("iqTest", function(){
    it('should return 3 when input is "2 4 7 8 10"', () => {
        expect(iqTest('2 4 7 8 10')).toBe(3);
    });

    it('should return 1 when input is "1 2 2"', () => {
        expect(iqTest('1 2 2')).toBe(1);
    });

    it('should return 2 when input is "2 1 2 2"', () => {
        expect(iqTest('2 1 2 2')).toBe(2);
    });

    it('should return 1 when input is "2 1"', () => {
        expect(iqTest('2 1')).toBe(1);
    });

    it('should return 4 when input is "2 2 2 1"', () => {
        expect(iqTest('2 2 2 1')).toBe(4);
    });
});

describe("iqTestCool", function(){
    it('should return 3 when input is "2 4 7 8 10"', () => {
        expect(iqTestCool('2 4 7 8 10')).toBe(3);
    });

    it('should return 1 when input is "1 2 2"', () => {
        expect(iqTestCool('1 2 2')).toBe(1);
    });

    it('should return 2 when input is "2 1 2 2"', () => {
        expect(iqTestCool('2 1 2 2')).toBe(2);
    });

    it('should return 1 when input is "2 1"', () => {
        expect(iqTestCool('2 1')).toBe(2);
    });

    it('should return 4 when input is "2 2 2 1"', () => {
        expect(iqTestCool('2 2 2 1')).toBe(4);
    });
});