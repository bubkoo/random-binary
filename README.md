# random-binary

> Return a random binary number.

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/mock-end/random-binary/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/mock-end/random-binary/master.svg?style=flat-square)](https://travis-ci.org/mock-end/random-binary)
[![coverage:?](https://img.shields.io/coveralls/mock-end/random-binary/master.svg?style=flat-square)](https://coveralls.io/github/mock-end/random-binary)


## Install

```
$ npm install --save random-binary 
```

## Usage

> For more use-cases see the [tests](https://github.com/mock-end/random-binary/blob/master/test/spec/index.js)

```js
var randomBinary = require('random-binary');

// API
// - randomBinary([bit]);
// - randomBinary([options]);
```

By default, the bit length is randomly between `0` and `256`:

```js
randomBinary();     
// => '11010000101111010101011010101100'
```

Can optionally specify a bit length and the result will be exactly that length:

```js
randomBinary(4); // or
randomBinary({ bit: 4 });
// => '0111'

randomBinary(8); // or
randomBinary({ bit: 8 });
// => '11011111'

randomBinary(16); // or
randomBinary({ bit: 16 });
// => '0101100001110000'
```

**Note**: the `bit` should between `0` and `256`.


## Related

- [random-integral](https://github.com/mock-end/random-integral) - Return a random integer.
- [random-natural](https://github.com/mock-end/random-natural) - Return a random natural number.
- [random-decimal](https://github.com/mock-end/random-decimal) - Return a random decimal.
- [random-floating](https://github.com/mock-end/random-floating) - Return a random floating point number.
- [random-index](https://github.com/mock-end/random-index) - Return a random array-like index.
- [random-octal](https://github.com/mock-end/random-octal) - Return a random octal number.
- [random-hexadecimal](https://github.com/mock-end/random-hexadecimal) - Return a random hexadecimal number.
- [random-unicode](https://github.com/mock-end/random-unicode) - Return a random unicode. 
- [random-bool](https://github.com/mock-end/random-bool) - Return a random boolean (true/false).
- [random-char](https://github.com/mock-end/random-char) - Return a random char.


## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mock-end/random-binary/issues/new).
