class Solution(object):
    def isMatch(self, s, p):
        """
        :type s: str
        :type p: str
        :rtype: bool
        """
        if not p:
            return not s
        if len(p) == 1:
            return len(s) == 1 and (s == p or p=='.')
        if p[1] != '*':
            if s and (s[0] == p[0] or p[0] == '.'):
                return self.isMatch(s[1:], p[1:])
            else:
                return False
        while s and (s[0] == p[0] or p[0] == '.'):
            if (self.isMatch(s, p[2:])):
                return True
            s=s[1:]
        return self.isMatch(s, p[2:])
            
        
            

# print Solution().isMatch("ab", "a*")
print Solution().isMatch("a", "ab*")