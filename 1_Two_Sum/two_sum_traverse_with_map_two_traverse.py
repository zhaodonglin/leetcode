class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        m = {}
        for i,val in enumerate(nums):
        	m[val] = i
        for i,val in enumerate(nums):
			j = m.get(target - val)
			if j is not None:
				return [i,j]

print Solution().twoSum([2,3,5],5)