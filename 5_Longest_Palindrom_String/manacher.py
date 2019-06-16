class Solution(object):
    def longestPalindrome(self, s):
        """
        :type s: str
        :rtype: str
        """
        t = "$#";
        for i in range(len(s)):
            t += s[i];
            t += "#";
        p = [0] * len(t)
        
        mx = 0
        id1 = 0
        resLen = 0
        resCenter = 0
        print len(t)
        for i in range(1, len(t)):
            p[i] = min(p[2 * id1 - i], mx - i) if mx > i else 1
            # print i, p[i], t
            if i+p[i] >= len(t) or i-p[i] < 0:
                    continue
            while t[i + p[i]] == t[i - p[i]]:
                print i,p[i]
                p[i] = p[i] + 1 
                if i+p[i] >= len(t) or i-p[i] < 0:
                    break
            if mx < i + p[i]:
                mx = i + p[i]
                id1 = i
            if resLen < p[i]:
                resLen = p[i]
                resCenter = i
        return s[(resCenter - resLen) / 2: (resCenter - resLen) / 2 + resLen-1];

print Solution().longestPalindrome("abba")
