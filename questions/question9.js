/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let num = x
  let revNumber = 0
  if(num < 0){
    return false
  }

  while(num > 0){
    revNumber = revNumber * 10 + (num % 10)
    num = Math.floor(num / 10)
  }

  return revNumber === x
};

module.exports = isPalindrome