class Solution(object):
    def expand(self, s, b1, b2, res, str_res):
        while b1 >=0 and b2 < len(s) and s[b1] == s[b2]:
                if b2 - b1 + 1 > res:
                    # print "2", b1, b2
                    res = b2 - b1 + 1
                    str_res = s[b1:b2+1]
                b1 = b1 -1
                b2 = b2 + 1
        return res, str_res
        
    def longestPalindrome(self, s):
        """
        :type s: str
        :rtype: str
        """
        res = 0
        str_res = ""
        if len(s) == 1:
            return s
        for i in range(0,len(s)-1):
            if s[i] == s[i+1]:
                res,str_res = self.expand(s, i, i+1, res, str_res)
            res, str_res = self.expand(s, i, i, res, str_res)
        return str_res