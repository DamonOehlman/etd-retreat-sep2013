var test = require('tape');
var nlp = require('../lib/algo').nextLargestPair;

test('nlp of 99, 99 === 99,98', function(t) {
  t.plan(1);
  t.deepEqual(nlp(99, 99), [99, 98]);
});

test('nlp of 87,2 === 86,2', function(t) {
  t.plan(1);
  t.deepEqual(nlp(87, 2), [86, 2]);
});