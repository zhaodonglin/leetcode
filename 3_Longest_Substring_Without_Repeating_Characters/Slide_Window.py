class Solution(object):
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        max1 = 0
        m={}
        left = -1
        for i in range(len(s)):
            pos = m.get(s[i])
            if pos is not None:
                if pos >= left:
                    left = m.get(s[i])
            max1 = max(max1, i-left)
            m[s[i]] = i
        return max1      

print "res", Solution().lengthOfLongestSubstring("loddktdji")
print "res", Solution().lengthOfLongestSubstring("bbccbad")


