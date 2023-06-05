// const chai = require('chai');
// const expect = chai.expect;
// const CustomArray = require('./CustomArray');

// describe('CustomArray', function() {
//     let array;

//     beforeEach(function() {
//         array = new CustomArray();
//     });

//     it('adds an item to the array', function() {
//         array.addItem('test');
//         expect(array.getArray()).to.include('test');
//     });

//     it('removes an item from the array', function() {
//         array.addItem('test');
//         array.removeItem('test');
//         expect(array.getArray()).to.not.include('test');
//     });

//     it('searches for an item in the array', function() {
//         array.addItem('test');
//         expect(array.searchItem('test')).to.be.true;
//     });

//     it('returns an error message when removing a non-existent item', function() {
//         expect(() => array.removeItem('test')).to.throw(Error, 'Item not found in the array');
//     });
// });

describe('CustomArray', function() {
    let array;

    before(function() {
        console.log('Starting test suite');
    });

    after(function() {
        console.log('Finished test suite');
    });

    beforeEach(function() {
        console.log('Starting a test');
        array = new CustomArray();
    });

    afterEach(function() {
        console.log('Finished a test');
        array = null;
    });

});
