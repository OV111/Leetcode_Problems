/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
    let sortedArr = arr.sort((a, b) => a - b);
    let diff = sortedArr[1] - sortedArr[0];
    for (let i = 2; i < sortedArr.length; ++i) {
        if(arr[i] - arr[i-1] !== diff) return false;
    }
    return true
};