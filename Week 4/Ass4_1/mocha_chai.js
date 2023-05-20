const chai = require('chai');
const expect = chai.expect;
const calculator = require('../calculator');

describe('Calculator', function() {
    it('should add two numbers', function() {
        expect(calculator("add", 1, 2)).to.equal(3);
    });

    it('should subtract two numbers', function() {
        expect(calculator("subtract", 2, 1)).to.equal(1);
    });

    it('should multiply two numbers', function() {
        expect(calculator("multiply", 2, 3)).to.equal(6);
    });

    it('should divide two numbers', function() {
        expect(calculator("divide", 6, 2)).to.equal(3);
    });

    it('should throw an error if non-numbers are passed', function() {
        expect(() => calculator("add", "a", 1)).to.throw(Error);
    });

    it('should throw an error if an invalid operation is passed', function() {
        expect(() => calculator("modulus", 2, 1)).to.throw(Error);
    });

    it('should throw an error if dividing by zero', function() {
        expect(() => calculator("divide", 2, 0)).to.throw(Error);
    });
});
