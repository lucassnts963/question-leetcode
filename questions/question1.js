//1. Two Sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
  const length = nums.length
  for(let i = 0; i < length; i++){
    for(let j = 0; j < length; j++){
      if((nums[i] + nums[j]) == target && i != j){
        return [i,j]
      }
    }
  }
}
module.exports = twoSum