/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let biggerList = []
  let smallerList = []
  if(l1.length != l2.length){
    biggerList = l1.length > l2.length ? l1 : l2
    smallerList = l1.length > l2.length ? l2 : l1
  }

  biggerList = l1
  smallerList = l2
  let sum = []
  let pass = 0
  for(let i = 0; i < biggerList.length; i++){
    for(let j = 0; j < smallerList.length; j++){
      if(i == j){
        const s = biggerList[i] + smallerList[j] + pass
        if(s >= 10){
          pass = Math.floor(s/10)
          const rest = s - pass * 10
          sum.push(rest)
        }else{
          sum.push(s)
          pass = 0
        }
      }
    }
    if(i >= smallerList.length){
      if(pass != 0){
        const s = biggerList[i] + pass

        if(s >= 10){
          pass = Math.floor(s/10)
          const rest = s - pass * 10
          sum.push(rest)
        }else {
          sum.push(s)
        }
      }else {
        sum.push(biggerList[i])
      }
    }
  }
  if(pass != 0){
    sum.push(pass)
  }

  return sum
};

module.exports = addTwoNumbers