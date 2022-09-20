const convert = require('../questions/question6')

test(`Input: s = "PAYPALISHIRING", numRows = 3 <-> Output: "PAHNAPLSIIGYIR"`, () =>{
  expect(convert("PAYPALISHIRING", 3)).toEqual("PAHNAPLSIIGYIR")
})

test(`Input: s = "PAYPALISHIRING", numRows = 4 <-> Output: "PINALSIGYAHRPI"`, () =>{
  expect(convert("PAYPALISHIRING", 4)).toEqual("PINALSIGYAHRPI")
})

test(`Input: s = "A", numRows = 1 <-> Output: "A"`, () =>{
  expect(convert("A", 4)).toEqual("A")
})