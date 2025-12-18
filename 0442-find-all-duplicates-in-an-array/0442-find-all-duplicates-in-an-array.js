/**
 * @param {number[]} nums
 * @return {number[]}
 */

var findDuplicates = function (nums) {
    const result = [];
    const countObj = {};
    for (let num of nums) {
        if (countObj[num]) {
            countObj[num] += 1;
        } else {
            countObj[num] = 1;
        }
    }
    for (let key in countObj) {
        if (countObj[key] > 1) {
            result.push(Number(key));
        }
    }
    return result;

    // let result = [];
    //   nums.sort((a,b) => a-b);

    //   for(let i = 0; i < nums.length-1; ++i) {
    //     if(nums[i] === nums[i+1]) {
    //       result.push(nums[i]);
    //     }
    //   }
    //   return result;
};
