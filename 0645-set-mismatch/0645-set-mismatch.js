/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    // || Using Map() 
    let duplicate, missing;
    const newNums = nums.sort((a, b) => a - b);
    for (let i = 0; i < newNums.length - 1; i++) {
        if (newNums[i] === newNums[i + 1]) {
            duplicate = newNums[i];
        } else if (newNums[i] + 1 !== newNums[i + 1]) {
            missing = newNums[i] + 1;
        }
    }
    if (newNums[0] !== 1) missing = 1;
    if (newNums[newNums.length - 1] !== newNums.length) missing = newNums.length;
    return [duplicate, missing];
};