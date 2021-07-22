/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
  if (x < 0) return false;
  let num = x;
  let rev = 0;
  while (x >= 10) {
    rev = rev * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  rev = rev * 10 + x;
  return num === rev;
};

console.log(isPalindrome(1221));
