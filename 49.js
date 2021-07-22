/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let result = [];
  while (strs.length !== 0) {
    let str = strs.pop();
    let group = [str];

    for (let i = 0; i < strs.length; i++) {
      if (strs[i] !== "?") {
        if (checkIsAnagrams(str, strs[i])) {
          group.push(strs[i]);
          strs[i] = "?";
        }
      }
    }
    result.push(group);
    // strs = strs.filter((str) => str!=='?');
  }
  return result;
};

const checkIsAnagrams = (str1, str2) => {
  let newStr1 = Array.from(str1).sort().join("");
  let newStr2 = Array.from(str2).sort().join("");
  return newStr1 === newStr2;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
