'use strict';

var clamp         = require('clamp');
var isObject      = require('is-object');
var toLength      = require('to-length');
var randomBool    = require('random-bool');
var randomNatural = require('random-natural');

module.exports = function (options) {

  var bit;

  if (isObject(options)) {
    bit = options.bit;
  } else {
    bit = options && options || 0;
  }

  bit = bit ? toLength(bit) : randomNatural({
    min: 1,
    max: 256,
    inspected: true
  });

  bit = clamp(bit, 1, 256);

  var ret = '';

  while (bit--) {
    ret += randomBool() ? '1' : '0';
  }

  return ret;
};
