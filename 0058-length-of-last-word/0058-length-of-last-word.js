/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    const newStrArr = s.trim().split(" ");
    return newStrArr[newStrArr.length - 1].length;
};