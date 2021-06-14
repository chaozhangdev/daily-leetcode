/**
 * @param {string} command
 * @return {string}
 */

 var interpret = function(command) {
  let buffer = ''
  let result = ''
  while (command !== '') {
     
      if (command.slice(0,1) === 'G') {
          result += 'G'
          command = command.substring(1)
      } else if (command.slice(0,2) === '()') {
          result += 'o'
          command = command.substring(2)
      } else {
          result += 'al'
          command = command.substring(4)
      }    
  }
  return result
};

// Solution 2
//  var interpret = function(command) {
//   let buffer = ''
//   let result = ''
//   while (command !== '') {
//       buffer += command.slice(0,1)
//       command = command.substring(1)
//       if (buffer === 'G') {
//           result += 'G'
//           buffer = ''
//       } else if (buffer === '()') {
//           result += 'o'
//           buffer = ''
//       } else if (buffer === '(al)') {
//           result += 'al'
//           buffer = ''
//       }    
//   }
//   return result
// };


// Solution 1
//  var interpret = function(command) {
//   let data = Array.from(command)
//   let buffer = ''
//   let result = ''
//   while (data.length > 0) {
//       buffer += data.shift()
//       console.log(buffer === 'G');
//       if (buffer === 'G') {
//           result += 'G'
//           buffer = ''
//       } else if (buffer === '()') {
//           result += 'o'
//           buffer = ''
//       } else if (buffer === '(al)') {
//           result += 'al'
//           buffer = ''
//       }    
//   }
//   return result
// };

console.log(interpret("G()(al)"))
