
const analyzeArray = require('./analyzeArray.js')

describe('analyzeArray', () => {

    it('should correctly calculate average, min, max, and length when array contains positive numbers', () => {
        const arr = [1, 2, 3, 4, 5];
        const result = analyzeArray(arr);
        expect(result.average).toBe(3);
        expect(result.min).toBe(1);
        expect(result.max).toBe(5);
        expect(result.length).toBe(5);
    });

    it('should return NaN for average and min/max as Infinity/-Infinity when array is empty', () => {
        const arr = [];
        const result = analyzeArray(arr);
        expect(result.average).toBeNaN();
        expect(result.min).toBe(Infinity);
        expect(result.max).toBe(-Infinity);
        expect(result.length).toBe(0);
    });
});
