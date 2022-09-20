/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
//P A Y P A L I S H I R  I  N  G
//0 1 2 3 4 5 6 7 8 9 10 11 12 13

//P A H N  A P L S I G Y I R
//0 4 8 12 1 3 5 7 
var convert = function(s, numRows) {
  let stringFormatted = ''

  let lines = []

  for(let i = 0; i < numRows; i++){
    lines.push([])
  }

  const n = s.length
  let index = 0

  while(index < n){
    //Go Down
    for(let j = 0; j < numRows &&  index < n; j++){
      lines[j].push(s[index])
      index++
    }

    //Go Up
    for(let j = numRows - 2; j > 0 && index < n; j--){
      lines[j].push(s[index])
      index++
    }
  }
  for(l of lines){
    stringFormatted = stringFormatted + l.join('')
  }
  return stringFormatted
};

module.exports = convert