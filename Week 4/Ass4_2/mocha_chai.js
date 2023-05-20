const chai = require('chai');
const expect = chai.expect;
const greetingsOrNumber = require('../greetingsOrNumber');

describe('greetingsOrNumber', function() {
    it('should return "1" when passed 1', function() {
        expect(greetingsOrNumber(1)).to.equal("1");
    });

    it('should return "2" when passed 2', function() {
        expect(greetingsOrNumber(2)).to.equal("2");
    });

    it('should return "Good Morning" when passed a 3', function() {
        expect(greetingsOrNumber(3)).to.equal("Good Morning");
    });

    it('should return "Good Afternoon" when passed a 7', function() {
        expect(greetingsOrNumber(7)).to.equal("Good Afternoon");
    });

    it('should return "Good Morning" when passed a multiple of 3', function() {
        expect(greetingsOrNumber(6)).to.equal("Good Morning");
    });

    it('should return "Good Afternoon" when passed a multiple of 7', function() {
        expect(greetingsOrNumber(14)).to.equal("Good Afternoon");
    });

    it('should return "Good Evening" when passed a multiple of 3 and 7', function() {
        expect(greetingsOrNumber(21)).to.equal("Good Evening");
    });

    it('should return the number as a string when it is neither a multiple of 3 nor 7', function() {
        expect(greetingsOrNumber(5)).to.equal("5");
    });

    it('should throw an error if the input is not a number', function() {
        expect(() => greetingsOrNumber("1")).to.throw(Error);
    });
});
