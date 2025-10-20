/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (s === " ") return true;
  let originalStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let reversedStr = originalStr.split("").reverse().join("");
  return reversedStr === originalStr;
};