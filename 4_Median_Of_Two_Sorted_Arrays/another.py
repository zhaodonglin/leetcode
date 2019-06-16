class Solution(object):
    def helper(self, mid, nums1, begin1, nums2, begin2):
        p = mid/2
        if begin1 >= len(nums1):
            return nums2[mid- begin2]
        if begin2 >= len(nums2):
            return nums1[mid -begin1]
        if mid == 0:
            return min(nums1[begin1], nums2[begin2])
        
        b1 = begin1 + p
        b2 = begin2 + p
        
        if b1 >= len(nums1):
            b1 = len(nums1) - 1
        if b2 >=len(nums2):
            b2 = len(nums2) - 1
        if nums1[b1] > nums2[b2]:
            return self.helper(mid-(b2-begin2+1),nums1, begin1, nums2, b2+1) 
        else:
            return self.helper(mid-(b1-begin1+1),nums1, b1+1, nums2, begin2)
            
        
    def findMedianSortedArrays(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: float
        """
        n1 = len(nums1)
        n2 = len(nums2)
        mid_is_one = (n1+n2)%2
        if mid_is_one:
            mid = (n1+n2)/2
            return self.helper(mid, nums1, 0, nums2, 0)
        else:
            mid1= (n1+n2)/2
            mid2 = (n1+n2-1)/2
            m1 = self.helper(mid1, nums1, 0, nums2, 0)
            m2 = self.helper(mid2, nums1, 0, nums2, 0)
            return (m1+m2)/2.0

print Solution().findMedianSortedArrays([1,3], [2])
print Solution().findMedianSortedArrays([1,2], [3,4])
print Solution().findMedianSortedArrays([1,2], [3,4,5])