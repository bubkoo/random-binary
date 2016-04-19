'use strict';

var clamp         = require('clamp');
var toLength      = require('to-length');
var randomBool    = require('random-bool');
var randomNatural = require('random-natural');

module.exports = function (bit) {

  bit = bit ? toLength(bit) : randomNatural(256);
  bit = clamp(bit, 1, 256);

  var ret = '';

  while (bit--) {
    ret += randomBool() ? '1' : '0';
  }

  return ret;
};
