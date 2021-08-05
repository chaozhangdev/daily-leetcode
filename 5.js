/**
 * @param {string} s
 * @return {string}
 */

const longestPalindrome = (s) => {
  const palindromeCheck = (start, end, s) => {
    if (start >= 0 && end < s.length && s.charAt(start) === s.charAt(end)) {
      if (end - start + 1 > result.length) result = s.slice(start, end + 1);
      palindromeCheck(start - 1, end + 1, s);
    } else {
      return;
    }
  };
  let result = "";
  let i = 0;
  while (i < s.length) {
    if (s.charAt(i) === s.charAt(i + 1)) palindromeCheck(i, i + 1, s);
    if (s.charAt(i) === s.charAt(i + 2)) palindromeCheck(i, i + 2, s);
    i++;
  }
  return result === "" ? s.charAt(0) : result;
};
