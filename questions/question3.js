/**
 * @param {string} s
 * @return {number}
*/
var lengthOfLongestSubstring = function(s) {
    const length = s.length
    let longestSubstring = ''

    for(let i = 0; i< length; i++){
      for(let j = 0; j< length; j++){
        const substring = s.substring(i,j+1)
        const substringLength = substring.length
        const set = new Set(substring)
        const isBigger = set.size == substringLength && longestSubstring.length < substringLength
        if(isBigger){
          longestSubstring = substring
        }
      }
    }
    return longestSubstring.length
};

module.exports = lengthOfLongestSubstring