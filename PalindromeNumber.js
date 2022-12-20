function isPalindrome(x) {
  let xStr = x.toString();
  return xStr === xStr.split("").reverse().join("");
}

// Test cases
console.log(isPalindrome(121)); // true
console.log(isPalindrome(16461)); // true
console.log(isPalindrome(-121)); // false
