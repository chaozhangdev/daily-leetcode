/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  let start = 0;
  let end = 0;
  let maxLength = 0
  let lettersSet = new Set();
  while (end < s.length) {
      if (lettersSet.has(s[end])) {
          lettersSet.delete(s[start])
          start++;
      } else {
          lettersSet.add(s[end]);
          maxLength = Math.max(maxLength, lettersSet.size);
          end++;
      }
  }
  return maxLength;
};