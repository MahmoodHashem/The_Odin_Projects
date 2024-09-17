

const calculator = require('./calculator.js');

describe("Calculator", ()=>{
 
    it('should sum two numbers', ()=>{
        const result = calculator.add(10,15); 
        expect(result).toBe(25); 
    })

    it('should subtract two numbers', ()=>{
        const result = calculator.subtract(5, 10); 
        expect(result).toBe(-5) 
    })

    it('should muliply two numbers', ()=>{
        const result = calculator.multiply(5,3); 
        expect(result).toBe(15); 
    })

    it('should divide two numbers', ()=>{
        const result = calculator.divide(10, 2); 
        expect(result).toBe(5); 
    })

})