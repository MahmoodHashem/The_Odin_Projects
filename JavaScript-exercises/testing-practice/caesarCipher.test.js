
const caesarCipher = require('./caesarCipher.js')

describe('caesarCipher', () => {

    it('should shift lowercase letters correctly within the alphabet range', () => {
        const input = 'abc';
        const shift = 1;
        const expectedOutput = 'bcd';
        const result = caesarCipher(input, shift);
        expect(result).toBe(expectedOutput);
    });

    it('should return an empty string when input is empty', () => {
        const input = '';
        const shift = 5;
        const expectedOutput = '';
        const result = caesarCipher(input, shift);
        expect(result).toBe(expectedOutput);
    });
});
