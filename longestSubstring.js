// Given a string s, find the length of the longest
// substring
//  without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

function lengthOfLongestSubstring(s) {
  let maxLength = 0;
  let start = 0;
  let charIndexMap = {};

  for (let end = 0; end < s.length; end++) {
    if (charIndexMap[s[end]] !== undefined) {
      // If the character is already in the current substring, move the start pointer to the next position
      start = Math.max(charIndexMap[s[end]] + 1, start);
    }

    // Update the character index in the map
    charIndexMap[s[end]] = end;

    // Update the maximum length if needed
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1
console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3
