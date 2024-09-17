const capitalize = require("./capitalize");



describe('capitalize', () => {
    it('should capitalize the first letter of a lowercase word', () => {
      const result = capitalize('hello');
      expect(result).toBe('Hello');
    });

    it('should return an empty string when input is empty', () => {
      const result = capitalize('');
      expect(result).toBe('');
    });
});
