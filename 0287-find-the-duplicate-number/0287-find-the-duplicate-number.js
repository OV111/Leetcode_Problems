/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    const set = new Set();
    for (let num of nums) {
        set.has(num) ? return num : set.add(num)
    }
    return -1
};