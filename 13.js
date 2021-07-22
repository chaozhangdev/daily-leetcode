/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
  const data = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const dataDouble = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };
  let sum = 0;
  while (s.length >= 2) {
    if (Object.keys(dataDouble).includes(s.slice(0, 2))) {
      sum += dataDouble[s.slice(0, 2)];
      s = s.slice(2);
    } else {
      sum += data[s.slice(0, 1)];
      s = s.slice(1);
    }
  }
  return s === "" ? sum : sum + data[s];
};
