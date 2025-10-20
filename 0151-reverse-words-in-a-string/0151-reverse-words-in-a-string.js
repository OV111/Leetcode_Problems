/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let splittedStr = s.split(" ");
    let filteredArr = splittedStr.filter((word) => word !== "");
    return filteredArr.reverse().join(" ");
};