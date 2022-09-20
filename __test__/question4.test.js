const findMedianSortedArrays = require('../questions/question4')

test(`Input: nums1 = [1,3], nums2 = [2]
      Output: 2.00000
      Explanation: merged array = [1,2,3] and median is 2.`, 
      () => {
        expect(findMedianSortedArrays([1,3], [2])).toBe(2.00000)
      }
)

test(`Input: nums1 = [1,2], nums2 = [3,4]
      Output: 2.5
      Explanation: merged array = [1,2,3,4] and median is 2.5.`, 
      () => {
        expect(findMedianSortedArrays([1,2], [3,4])).toBe(2.5)
      }
)


test(`Input: nums1 = [1,3,4,5], nums2 = [7,9,10,5]
      Output: 5
      Explanation: merged array = [1,3,4,5,5,7,9,10] and median is 5.`, 
      () => {
        expect(findMedianSortedArrays([1,3,4,5], [7,9,10,4,5])).toBe(5)
      }
)
test(`Input: nums1 = [1,3,4], nums2 = [7,9,5]
      Output: 5
      Explanation: merged array = [1,3,4,5,7,9] and median is 4.5.`, 
      () => {
        expect(findMedianSortedArrays([1,3,4], [7,9,5])).toBe(4.5)
      }
)

