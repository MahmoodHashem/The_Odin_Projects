const caesarCipher = (str, shift) => {
    const shiftChar = (char) => {
        const code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) { 
            return String.fromCharCode(((code - 65 + shift) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
            return String.fromCharCode(((code - 97 + shift) % 26) + 97);
        }
        return char; 
    };

    return str.split('').map(shiftChar).join('');
};

module.exports = caesarCipher; 