const myAtoi = require('../questions/question8')

test(`Input "42" <-> Output 42`, () => {
  expect(myAtoi("42")).toBe(42)
})
test(`Input "   -42" <-> Output 42`, () => {
  expect(myAtoi("   -42")).toBe(-42)
})
test(`Input "4193 with words" <-> Output 4193`, () => {
  expect(myAtoi("4193 with words")).toBe(4193)
})