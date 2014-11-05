// tests.js
var expect = require('chai').expect;
var hwt = require('../helloWorldTravis');   // .js is implied


// Array Test is Always TRUE test, proves it's possible to pass, ie things are working
describe('helloWorldTravis script', function () {
    it('returns Hello World Travis!', function (done) {     // TODO?  Need done() here?
        expect( hwt() ).to.eql('Hello World Travis!');
        done();
    });
});

// This is a FAIL CASE, and it does fail if uncommented !  :)
// describe('helloWorldTravis script -- fail case', function () {
//     it('returns Hello World Travis!', function (done) {
//         expect(hwt()).to.eql('This is not right!!! :) please fail this');
//         done();
//     });
// });



