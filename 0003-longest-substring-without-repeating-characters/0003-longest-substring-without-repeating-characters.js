/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
if(s.length === 1) return 1
    let res = s[0];
    let right = 1;
    let maxNum = 0;
    while (right < s.length) {
        if (res.includes(s[right])) {
            res = res.slice(res.indexOf(s[right]) + 1) + s[right];
        } else {
            res += s[right];
        }
        right++;
        if (maxNum < res.length) {
            maxNum = res.length;
        }
    }
    return maxNum;
};