/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const length = s.length
  let longestSubstring = ''

  for(let i = 0; i< length; i++){
    for(let j = 0; j< length; j++){
      const substring = s.substring(i,j+1)
      const substringLength = substring.length
      const reverseString = substring.split('').reverse().join('')
      const isEqual = substring == reverseString && longestSubstring.length < substringLength
      if(isEqual){
        longestSubstring = substring
      }
    }
  }
  return longestSubstring
};

module.exports = longestPalindrome