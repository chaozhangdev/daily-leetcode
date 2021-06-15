/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let result = "";
  let carry = 0;
  for (
    let i = num1.length - 1, j = num2.length - 1;
    i >= 0 || j >= 0 || carry === 1;
    i--, j--
  ) {
    let x = i >= 0 ? num1.charAt(i) - "0" : 0;
    let y = j >= 0 ? num2.charAt(j) - "0" : 0;
    result = ((x + y + carry) % 10) + result;
    carry = Math.floor((x + y + carry) / 10);
  }
  return result;
};
