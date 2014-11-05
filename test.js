'use strict';

var co = require('co');
var every = require('./');

function sleep(ms) {
  return function(cb) {
    setTimeout(cb, ms);
  };
}

describe('co-every', function () {
  it('should work like every', function (done) {
    co(function* () {
      var test = yield* every([0, 2, 4], function* (n) {
        return n % 2 == 0;
      });
      test.should.eql(true);
    })(done);
  });
  it('should work like every', function (done) {
    co(function* () {
      var test = yield* every([0, 2, 4, 5], function* (n) {
        return n % 2 == 0;
      });
      test.should.eql(false);
    })(done);
  });
  it('should be compatible with co', function (done) {
    co(function* () {
      var test = yield* every([0, 2, 4], function* (n) {
        yield sleep(100);
        return n % 2 == 0;
      });
      test.should.eql(true);
    })(done);
  });
  it('should accept context', function (done) {
    co(function* () {
      var ctx = {};
      yield* every([0], function* (n) {
        this.should.equal(ctx);
      }, ctx);
    })(done);
  });
  it('should have the same signature as every', function (done) {
    co(function* () {
      var array = ['0', '1', '2'];
      yield* every(array, function* (n, i, a) {
        n.should.eql(i);
        a.should.eql(array);
      });
    })(done);
  });
});
