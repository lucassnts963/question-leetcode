/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if( !(x >= -Math.pow(2,31) && x <= Math.pow(2,31)) ){
      return 0
    }
    const isNegative = x < 0
    const numberString = x.toString()
    const stringArrayReverse = numberString.split('').reverse()
    let numberReverse = 0
    if(isNegative){
      stringArrayReverse.pop()
      numberReverse = Number(`-${stringArrayReverse.join('')}`)
    } else {
      numberReverse = Number(stringArrayReverse.join(''))
    }


    return numberReverse
};

module.exports = reverse