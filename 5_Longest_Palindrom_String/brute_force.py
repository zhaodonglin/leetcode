class Solution(object):
    def isPanlindrome(self,s):
        i=0
        j =len(s)-1
        while i < j and i < len(s) and j >= 0: 
            if s[i] != s[j]:
                return False
            i = i + 1
            j = j - 1
        return True

    def longestPalindrome(self, s):
        """
        :type s: str
        :rtype: str
        """
        res = 0
        str_res = ""
        if len(s) == 1:
            return s
        for i in range(0,len(s)):
            for j in range(i+1, len(s)+1):   
                if self.isPanlindrome(s[i:j]):
                    if j-i+1 > res:
                        res = j - i + 1 
                        str_res = s[i:j]
        return str_res

