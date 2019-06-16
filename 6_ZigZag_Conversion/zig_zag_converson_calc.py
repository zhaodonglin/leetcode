class Solution(object):
    def convert(self, s, numRows):
        """
        :type s: str
        :type numRows: int
        :rtype: str
        """
        if numRows == 1:
            return s
        lists = [[] for i in range(numRows)]
        for i in range(len(s)):
            m, r = divmod(i, numRows-1)
            if m % 2 == 0:
                pos = 0 if r == 0 else r 
            else:
                pos = numRows -1 if r == 0 else numRows - 1 - r
            lists[pos].append(s[i])
        res = ""
        for i in range(numRows):
            res = res + "".join(lists[i])
        return res