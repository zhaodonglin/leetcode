class Solution(object):
    def find_kth_element(self, nums1, nums1Begin, nums2, nums2Begin, target):
        if nums1Begin >= len(nums1): 
            return nums2[nums2Begin + target - 1]
        if nums2Begin >= len(nums2):
            return nums1[nums1Begin + target - 1]
        if target == 1:
            return min(nums1[nums1Begin], nums2[nums2Begin])
        k = target/2
        b1 = nums1Begin + k
        b2 = nums2Begin + k
        
        if b1 >= len(nums1):
            b1 = len(nums1)
        if b2 >= len(nums2):
            b2 = len(nums2)

        if nums1[b1 - 1] < nums2[b2 - 1]:
            k = b1 - nums1Begin
            return self.find_kth_element(nums1, b1, nums2, nums2Begin, target - k)
        else:
            k = b2 - nums2Begin
            return self.find_kth_element(nums1, nums1Begin, nums2, b2, target - k)
    
    def findMedianSortedArrays(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: float
        """
        n = len(nums1)
        m = len(nums2)
        k1 = (n+m+1)/2
        k2 = (n+m+2)/2
        return (self.find_kth_element(nums1, 0, nums2, 0, k1) + self.find_kth_element(nums1, 0, nums2, 0, k2))/2.0


print Solution().findMedianSortedArrays([1,2,3], [4,5,6])