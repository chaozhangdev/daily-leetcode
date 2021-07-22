/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// solution 2: HashMap
const twoSum2 = (nums, target) => {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    } else {
      map.set(nums[i], i);
    }
  }
};

// solution 1: regular check (includes & indexOf waste time)
const twoSum1 = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    let num1 = nums[i];
    let num2 = target - num1;
    if (nums.includes(num2)) {
      let index = nums.indexOf(num2);
      if (i !== index) {
        return [i, index];
      }
    }
  }
};
