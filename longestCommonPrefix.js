/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.

*/

function longestCommonPrefix(strs) {
  if (strs.length === 0) {
    return "";
  }

  // Sort the array of strings
  strs.sort();

  // Take the first and last strings after sorting
  let firstStr = strs[0];
  let lastStr = strs[strs.length - 1];

  // Find the common prefix between the first and last strings
  let i = 0;
  while (i < firstStr.length && firstStr.charAt(i) === lastStr.charAt(i)) {
    i++;
  }

  // Return the common prefix
  return firstStr.substring(0, i);
}

// Example usage:
const example1 = ["flower", "flow", "flight"];
const example2 = ["dog", "racecar", "car"];

console.log(longestCommonPrefix(example1)); // Output: "fl"
console.log(longestCommonPrefix(example2)); // Output: ""
