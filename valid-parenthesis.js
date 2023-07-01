/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {

  const valid = []; 
  
  let isValid = true;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      valid.push(s[i]);
    } else {
      if (s[i] === ']' && valid[valid.length - 1] === '[') {
        valid.pop();
      } else if (s[i] === '}' && valid[valid.length - 1] === '{') {
        valid.pop();
      } else if (s[i] === ')' && valid[valid.length - 1] === '(') {
        valid.pop();
      } else {
        isValid = false;
        break;  
      }
    }
  }

  if (valid.length) {
      isValid = false;
  }

  return isValid;
};

console.log(isValid('(()}{}'));
console.log(isValid(']'));
console.log(isValid('(])'));
console.log(isValid('(){}}{'));
console.log(isValid(']'));
