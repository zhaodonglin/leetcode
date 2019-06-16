class Solution(object):
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        if len(s) == 1:
            return 1
        left = 0
        max_len = 0
        m = {}
        for i in range(len(s)):
            if s[i] in m:
                pos = m.get(s[i])
                left = max(left, pos + 1)
            m[s[i]] = i
            print i,left
            max_len = max(max_len, i-left +1)

        return max_len

print Solution().lengthOfLongestSubstring("abba")