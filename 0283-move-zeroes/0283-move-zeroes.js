/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    if (nums.length < 0) return [0];
    let pos = 0;
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] !== 0) {
            [nums[i], nums[pos]] = [nums[pos], nums[i]]
            pos++;
        }
    }
    return nums
};  