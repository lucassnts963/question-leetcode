const reverse = require('../questions/question7')


test(`Input: x = 123 <-> Output: 321`, () => {
  expect(reverse(123)).toBe(321)
})
test(`Input: x = -123 <-> Output: -321`, () => {
  expect(reverse(-123)).toBe(-321)
})
test(`Input: x = 120 <-> Output: 21`, () => {
  expect(reverse(120)).toBe(21)
})
test(`Input: x = 2^32 <-> Output: 0`, () => {
  expect(reverse(Math.pow(2,32))).toBe(0)
})