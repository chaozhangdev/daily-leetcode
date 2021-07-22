/**
 * @param {string[]} strs
 * @return {string}
 */
let result = "";
var longestCommonPrefix = function (strs) {
  let data = [];
  let newStrs = [];
  for (let el of strs) {
    if (el === "") return "";
    data.push(el.slice(0, 1));
    newStrs.push(el.slice(1));
  }
  let set = new Set(data);
  if (set.size === 1) {
    return data[0] + longestCommonPrefix(newStrs);
  } else {
    return "";
  }
};
