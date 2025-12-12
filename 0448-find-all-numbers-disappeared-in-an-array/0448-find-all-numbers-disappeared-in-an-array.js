/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    let result = []
    let sortedArr = nums.sort((a, b) => a - b)
    let set = new Set(sortedArr)
    for (let i = 1; i <= nums.length; ++i) {
        if (!set.has(i)) {
            result.push(i)
        }
    }
    return result
};