class Solution(object):
    def calcVal(self, str, i, sign):
        val = 0
        while i < len(str) and str[i].isdigit():
            v = str[i]
            val = val*10 + int(v)
            i = i + 1
        if sign == 1 and val > pow(2,31)-1:
            return pow(2,31) - 1
        if sign == -1 and val > pow(2,31):
            return sign*pow(2,31)
        return sign*val
            
    def myAtoi(self, str):
        """
        :type str: str
        :rtype: int
        """
        if len(str) == 0:
            return 0
        v = str[0]
        val = 0
        sign = 1
        i = 0
        if v == ' ':
            while i + 1 < len(str) and v == ' ':
                i = i + 1
                v = str[i] 
        if v == '-':
            sign = -1
            i = i + 1
            v = str[i]
        if v == '+':
            sign = 1
            i = i + 1
            v = str[i]
        if v.isdigit():
            return self.calcVal(str, i, sign)
        return 0 

print Solution().myAtoi(" -42")
