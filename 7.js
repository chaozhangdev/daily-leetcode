/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let str = Math.abs(x) + "";
  let result = "";
  while (str !== "") {
    result = str.slice(0, 1) + result;
    str = str.slice(1);
  }
  result = x < 0 ? Number(result) * -1 : Number(result);
  if (result < Math.pow(2, 31) * -1 || result > Math.pow(2, 31)) {
    return 0;
  } else {
    return result;
  }
};
