const lengthOfLongestSubstring = require('../questions/question3')

test(`Input: s = "abcabcbb"
      Output: 3
      Explanation: The answer is "abc", with the length of 3.`, () => { 
        expect(lengthOfLongestSubstring("abcabcbb")).toBe(3)
    })

test(`Input: s = "bbbbb"
      Output: 1
      Explanation: The answer is "b", with the length of 1.`, () => { 
        expect(lengthOfLongestSubstring("bbbbb")).toBe(1)
    })
    
test(`Input: s = "pwwkew"
      Output: 3
      Explanation: The answer is "wke", with the length of 3.
      Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.`, () => { 
        expect(lengthOfLongestSubstring("pwwkew")).toBe(3)
    })