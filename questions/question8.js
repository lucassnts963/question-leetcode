/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  let withoutWhitespace = s.replace(/\s/g, '')
  let isNegative = false
  let myNumber = ''
  for(char of withoutWhitespace){
    if(char === '-'){
      isNegative = true
    }
    const num = char - 0
    if(num){
      myNumber += num
    }

  }
  
  if(isNegative){
    myNumber = '-' + myNumber
  }
  return Number(myNumber)
};

module.exports = myAtoi