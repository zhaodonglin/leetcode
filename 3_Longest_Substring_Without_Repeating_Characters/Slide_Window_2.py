class Solution(object):
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        max1 = 0
        m={}
        cur = 0
        for i in range(cur, len(s)):
            pos = m.get(s[i])
            if pos is not None:
                if pos >= cur:
                    cur = m.get(s[i])+1
                    max1 = max(max1, i-cur)
                    m[s[i]] = i
                    continue
            max1 = max(max1, i-cur+1)
            m[s[i]] = i
        return max1