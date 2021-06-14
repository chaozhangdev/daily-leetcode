/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const data = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  const stack = [];
  for (let c of s) {
    if (stack.length === 0) {
      stack.push(c)
    } else {
      if (stack[stack.length - 1] === data[c]) {
        stack.pop()
      } else {
        stack.push(c)
      }
    }
  }
  return stack.length === 0;
};

console.log(isValid("()[]{}"));
