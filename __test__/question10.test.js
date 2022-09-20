const isMatch = require('../questions/question10')

test(`Input: s = "aa", p = "a" <-> Output: false`, () => {
  expect(isMatch("aa", "a")).toBe(false)
})
test(`Input: s = "aa", p = "a*" <-> Output: true`, () => {
  expect(isMatch("aa", "a*")).toBe(true)
})
test(`Input: s = "ab", p = ".*" <-> Output: true`, () => {
  expect(isMatch("ab", ".*")).toBe(true)
})