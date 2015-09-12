# array-occurrence [![Build Status](https://travis-ci.org/gillstrom/array-occurrence.svg?branch=master)](https://travis-ci.org/gillstrom/array-occurrence)

> Get the number of occurrences of an item in an array


## Install

```
$ npm install --save array-occurrence
```


## Usage

```js
var arrayOccurrence = require('array-occurrence');

arrayOccurrence(['foo', 'bar', 'foo'], 'foo');
//=> 2
```


## API

### arrayOccurrence(input, search)

#### input

Type: `array`

Array to search in.

#### search

Type: `Any type`

Item to search for.


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)
