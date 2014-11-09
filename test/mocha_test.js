// tests.js
var expect = require('chai').expect;
var hwt = require('../helloWorldTravis');
var Counter = require('../Counter');


describe('helloWorldTravis script', function () {
    it('returns Hello World Travis!', function (done) {
        expect( hwt() ).to.eql('Hello World Travis!');
        done();
    });
});


describe('begin the Counter tests', function () {

    var myCtr = new Counter();

    it('starts at 0 when constucted wo a param', function (done) {
        expect( myCtr.getValue() ).to.eql(0);
        done();
    });

    it('is 1 more after incrementing', function (done) {
        expect( myCtr.increment().getValue() ).to.eql(1);
        done();
    });

    var my22Counter = new Counter(20);

    it('starts at 20 when constucted w 20', function (done) {
        expect( my22Counter.getValue() ).to.eql(20);
        done();
    });

    it('can increment by n=2', function (done) {
        expect( my22Counter.increment(2).getValue() ).to.eql(22);
        done();
    });

});




