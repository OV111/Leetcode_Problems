/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    let result = [];
    let current = 0;
    for (let i = 1; i <= n; ++i) {
        if(current >= target.length) break;
        if (i === target[current]) {
            result.push("Push");
            current++;
        } else {
            result.push("Push");
            result.push("Pop");
        }
    }
    return result;
};