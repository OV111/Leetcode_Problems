/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
    const bit = n.toString(2);
    let count = 0;
    for (let i = 0; i < bit.length; ++i) {
        if (bit[i] === "1") ++count;
    }
    return count;
};