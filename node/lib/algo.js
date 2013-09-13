var pull = require('pull-stream');

var mul = exports.mul = function(values) {
  var sum = 1;
  while (values.length) {
    sum *= values.shift()
  }

  return sum;
}

var bruteDecrementing = exports.bruteDecrementing = function(a, b, maxA, maxB) {
  return b === 0 ? [a - 1, maxB] : [a, b - 1];
};

var nextLargestPair = exports.nextLargestPair = function(a, b) {
  return (a > b) ? [a - 1, b] : [a, b - 1];
};

var isPalindrome = exports.isPalindrome = function(value) {
  var len;
  var halflen;
  var matches = true;
  var ii;

  // convert the value to a string
  value = value.toString();

  // save the length and half length
  len = value.length;
  halflen = len >> 1;

  // check for matches
  for (ii = 0; matches && ii < halflen; ii++) {
    matches = value.charAt(ii) === value.charAt(len - 1 - ii);
  }

  return matches;
};

exports.slicer = pull.Source(function(input, size) {
  var idx = 0;

  return function(end, cb) {
    var slice = input.slice(idx, idx + size);
    var values;

    // we have ended if the slice is not of the required length
    end = end || slice.length < size;

    if (! end) {
      values = slice.split('').map(function(chr) {
        return parseInt(chr, 10);
      });
    }

    idx += 1;
    
    // send 
    cb(end, values);
  };
});

// a pairwise generator for pairs
exports.generatePairs = pull.Source(function(a, b, modifier) {
  var first = true;
  var maxA = a;
  var maxB = b;

  return function(end, cb) {
    var next;

    if (first) {
      first = false;
      return cb(end, [a, b]);
    }

    next = modifier(a, b, maxA, maxB);
    a = next[0];
    b = next[1];
    end = end || (a === 0 && b === 0);

    cb(end, next);
  };
});