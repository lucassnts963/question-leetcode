/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const mergedArray = [...nums1, ...nums2]
  mergedArray.sort((a, b) => {
    if(a < b)  return -1
    if(a == b) return  0
    if(a > b)  return  1
  })
  const length = mergedArray.length

  let median = 0

  if(length%2 == 0){
    const half = length / 2
    const first = mergedArray[half - 1]
    const second = mergedArray[half]
    median = ((first + second) / 2)
  }else{
    const indexCentral = Math.floor(length/2)
    median = mergedArray[indexCentral]
  }
  return median
};

// console.log(findMedianSortedArrays([1,3], [2]))
// console.log(findMedianSortedArrays([1,2], [3,4]))
// console.log(findMedianSortedArrays([1,3,4,5], [7,9,10,4,5]))
// console.log(findMedianSortedArrays([1,3,4], [7,9,5]))

module.exports = findMedianSortedArrays