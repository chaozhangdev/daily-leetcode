/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var addStrings = function(num1, num2) {
  let buffer = 0
  let sum = ''
  while (num1 !== '' && num2 !=='') {
      let tempSum = Number(num1.slice(-1)) + Number(num2.slice(-1)) + buffer
      if (tempSum >= 10) {
          sum = tempSum % 10 + sum;
          buffer = Math.floor(tempSum / 10)
      } else {
          sum = tempSum + sum;
          buffer = 0
      }
      num1 = num1.slice(0, -1);
      num2 = num2.slice(0, -1);
  }
  if (num1 === '' && num2 === '') {
      if (buffer !==0) {
          return buffer + sum
      } else {
          return sum
      }
  } else if (num1 === '') {
      sum = (Number(num2.slice(-1)) + buffer) + sum;
      sum = num2.slice(0, -1) + sum 
      return sum
  } else {
      sum = (Number(num1.slice(-1)) + buffer) + sum;
      sum = num1.slice(0, -1) + sum
      return sum 
  } 
};

console.log(addStrings("6994", "36"));

