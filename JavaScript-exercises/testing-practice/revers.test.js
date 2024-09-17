

const reverse = require('./reverse-string.js')


describe('reverse', () => {

    it('should return the reversed string when given a regular string', () => {
        const input = 'hello';
        const expectedOutput = 'olleh';
        const result = reverse(input);
        expect(result).toBe(expectedOutput);
    });

    it('should return an empty string when given an empty string', () => {
        const input = '';
        const expectedOutput = '';
        const result = reverse(input);
        expect(result).toBe(expectedOutput);
    });

    it('should return the reversed string with special characters when given a string', () => {
        const input = 'a!b@c#';
        const expectedOutput = '#c@b!a';
        const result = reverse(input);
        expect(result).toBe(expectedOutput);
    });

    it('should return the reversed string when given a string with numbers and letters', () => {
        const input = 'h3ll0';
        const expectedOutput = '0ll3h';
        const result = reverse(input);
        expect(result).toBe(expectedOutput);
    });

    it('should return the reversed string of a very long string', () => {
        const input = 'This is a very long string that needs to be reversed';
        const expectedOutput = 'desrever eb ot sdeen taht gnirts gnol yrev a si sihT';
        const result = reverse(input);
        expect(result).toBe(expectedOutput);
    });
});

