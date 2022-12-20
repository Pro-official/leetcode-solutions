// Given an integer x, return true if x is a palindrome, and false otherwise. Follow up: do it without converting the integers to strings.

function isPalindrome(x) {
  if (x < 0) return false;

  let reverse = 0;
  let original = x;
  while (x > 0) {
    reverse = reverse * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return reverse === original;
}

// Test cases
console.log(isPalindrome(121)); // true
console.log(isPalindrome(16461)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(56665)); // true
