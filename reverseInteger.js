// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21

// Constraints:

// -231 <= x <= 231 - 1

function reverse(x) {
  const limit = Math.pow(2, 31);
  const isNegative = x < 0;
  let reversed = parseInt(Math.abs(x).toString().split("").reverse().join(""));

  if (isNegative) {
    reversed *= -1;
  }

  if (reversed < -limit || reversed > limit - 1) {
    return 0;
  }

  return reversed;
}

// Test cases
console.log(reverse(123)); // Output: 321
console.log(reverse(-123)); // Output: -321
console.log(reverse(120)); // Output: 21
