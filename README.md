# co-every [![Build Status](https://travis-ci.org/purposeindustries/co-every.svg)](https://travis-ci.org/purposeindustries/co-every)

## Install

Install the [package](http://npmjs.org/package/co-every) with [`npm`](http://npmjs.org):

```sh
$ npm install co-every
```

## Usage

### `every(array, fn[, ctx])`

```js
var test = yield* every([0, 2, 4], asyncIsEven);
console.log(test);
```

## License

MIT
