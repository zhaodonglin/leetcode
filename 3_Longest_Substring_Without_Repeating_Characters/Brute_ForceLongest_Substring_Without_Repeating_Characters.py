class Solution(object):
    def stringHasDuplicate(self,s):
        # print s
        for i in range(len(s)):
            for j in range(i+1, len(s)):
                if s[i] == s[j]:
                    return True
        return  False
    
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        max1 = 0;
        for i in range(len(s)):
            for j in range(len(s)):
                # print i, j
                res = s[i:j+1]
                # print res, len(res)
                if not self.stringHasDuplicate(res):
                    max1 = max(max1, len(res))
        return max1        

print Solution().stringHasDuplicate("a")

print Solution().lengthOfLongestSubstring(" ")
                
 