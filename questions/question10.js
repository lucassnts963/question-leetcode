/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  let match = false
  const pattern = new RegExp(p, 'g')
  s.match(pattern).forEach((m, i) => {
    if(m === s){
      match = true
    }
  })
  return match
};

module.exports = isMatch