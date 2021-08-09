/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
  if (nums.length < 3) return [];
  let result = [];
  let found = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let target = 0 - nums[i] - nums[j];
      if (i !== j && j !== target && i !== target) {
        console.log(i, j, target);
        if (nums.slice(j).includes(target)) {
          let arr = [nums[i], nums[j], target].sort((a, b) => a - b);

          if (!found.includes(arr.join(""))) {
            result.push(arr);
            found.push(arr.join(""));
          }
        }
      }
    }
  }
  return result;
};

console.log(threeSum([-1, 0, 1]));
