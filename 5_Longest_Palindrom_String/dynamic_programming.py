class Solution(object):
    def longestPalindrome(self, s):
        """
        :type s: str
        :rtype: str
        """
        p = [[False]*len(s) for i in range(len(s))]
        maxVal = 0
        begin = 0
        end = 0
        for i in range(len(s)):
            for j in range(0, i):
                p[j][i] = (s[i] == s[j])  and ((i - j < 2) or  p[j+1][i-1])
                if p[j][i] and (i - j + 1 > maxVal):
                    maxVal = i - j + 1
                    begin = j
                    end = i
            p[i][i] = True
        return s[begin:end+1]

print Solution().longestPalindrome("abba")