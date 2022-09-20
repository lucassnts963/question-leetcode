const longestPalindrome = require('../questions/question5')

test(`Input: s = "abcabcbb"
      Output: bcb`, () => { 
        expect(longestPalindrome("abcabcbb")).toBe("bcb")
    })

test(`Input: s = "bbbbb"
      Output: bbbbb`, () => { 
        expect(longestPalindrome("bbbbb")).toBe("bbbbb")
    })
    
test(`Input: s = "pwwkew"
      Output: ww`, () => { 
        expect(longestPalindrome("pwwkew")).toBe("ww")
    })
test(`Input: s = "babad"
      Output: bab`, () => { 
        expect(longestPalindrome("babad")).toBe("bab")
    })
test(`Input: s = "cbbd"
      Output: bb`, () => { 
        expect(longestPalindrome("cbbd")).toBe("bb")
    })