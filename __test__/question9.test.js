const isPalindrome = require('../questions/question9')
test('Input: 121 <-> Output: true', () => {
  expect(isPalindrome(121)).toBe(true)
})
test('Input: -121 <-> Output: false', () => {
  expect(isPalindrome(-121)).toBe(false)
})
test('Input: 10 <-> Output: false', () => {
  expect(isPalindrome(10)).toBe(false)
})
test('Input: 323 <-> Output: true', () => {
  expect(isPalindrome(323)).toBe(true)
})
test('Input: 101 <-> Output: true', () => {
  expect(isPalindrome(101)).toBe(true)
})