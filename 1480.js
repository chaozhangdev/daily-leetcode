// const runningSum = (nums) => {
//   let result = []
//   while (nums.length !== 0) {
//     let sum = 0;
//     for (let e of nums) {
//       sum += e
//     }
//     result.unshift(sum);
//     nums.pop();
//   }
//   // console.log(result);
//   return result;
// }

const runningSum = (nums) => {
  let sum = 0;
  for (let i in nums) {
    nums[i] += sum;
    sum = nums[i]
  }
  return nums;
}

console.log(runningSum([3,1,2,10,1]));