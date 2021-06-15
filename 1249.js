/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  let stack = [];
  let arr = Array.from(s);
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === "(") {
      stack.push(i);
    } else if (s.charAt(i) === ")") {
      stack.length === 0 ? (arr[i] = "") : stack.pop();
    }
  }
  stack.forEach((index) => (arr[index] = ""));
  return arr.join("");
};

console.log(minRemoveToMakeValid("lee(t(c)o)de)"));
