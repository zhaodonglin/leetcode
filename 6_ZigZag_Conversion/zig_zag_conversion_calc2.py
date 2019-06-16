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
        cur_row = 0
        for i in range(len(s)):
            lists[cur_row].append(s[i])
            if cur_row == 0:
                val = 1
            if cur_row == numRows -1:
                val = -1
            cur_row = cur_row + val
        res = ""
        for i in range(numRows):
            res = res + "".join(lists[i])
        return res