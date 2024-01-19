// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);

// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// Example 3:

// Input: s = "A", numRows = 1
// Output: "A"

// Constraints:

// 1 <= s.length <= 1000
// s consists of English letters (lower-case and upper-case), ',' and '.'.
// 1 <= numRows <= 100

function convert(s, numRows) {
  if (numRows === 1 || numRows >= s.length) {
    return s;
  }

  const resultRows = Array.from({ length: numRows }, () => []);
  let row = 0;
  let direction = 1; // 1 for down, -1 for up

  for (let i = 0; i < s.length; i++) {
    resultRows[row].push(s[i]);

    // Change direction when reaching the top or bottom row
    if (row === 0) {
      direction = 1;
    } else if (row === numRows - 1) {
      direction = -1;
    }

    row += direction;
  }

  // Concatenate the rows to form the final result
  const result = resultRows.map((row) => row.join("")).join("");

  return result;
}

// Example usage:
console.log(convert("PAYPALISHIRING", 3)); // Output: "PAHNAPLSIIGYIR"
console.log(convert("PAYPALISHIRING", 4)); // Output: "PINALSIGYAHRPI"
console.log(convert("A", 1)); // Output: "A"
