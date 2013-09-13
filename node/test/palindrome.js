var test = require('tape');
var isPalindrome = require('../lib/algo').isPalindrome;

test('9009 is palindrome', function(t) {
  t.plan(1);
  t.ok(isPalindrome(9009));
});