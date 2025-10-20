/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
     let leftSideArr = [];
  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  for(let char of s) {
    if(char === "(" || char === "{" || char === "[") {
      leftSideArr.push(char);
    } else {
      if(leftSideArr.length === 0 || leftSideArr[leftSideArr.length- 1] !== map[char]) {
        return false;
      }
      leftSideArr.pop()
    }

  }
  return leftSideArr.length === 0;
};