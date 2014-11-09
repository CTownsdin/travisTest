'use strict';

// make a counter object
var Counter = function (initialCount) {
    this.count = initialCount || 0;
};
Counter.prototype.increment = function (inc) {
    var amt = inc || 1;
    this.count += amt;
    return this;
};
Counter.prototype.getValue = function () {
    return this.count;
};

module.exports = Counter;
