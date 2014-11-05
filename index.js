'use strict';

module.exports = function* every(array, fn, ctx) {
  for(var i in array) {
    if (!(yield* fn.call(ctx, array[i], i, array))) {
      return false;
    }
  }
  return true;
};
