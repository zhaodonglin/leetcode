class Solution(object):
    def findMedianSortedArrays(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: float
        """
        N1 = len(nums1)
        N2 = len(nums2)
        if N1 < N2: return self.findMedianSortedArrays(nums2, nums1)    # Make sure nums2 is the shorter one.
        
        lo = 0 
        hi = N2 * 2
        while lo <= hi:
            mid2 = (lo + hi) / 2;   # Try Cut 2 
            mid1 = N1 + N2 - mid2;  #Calculate Cut 1 accordingly
            
            L1 = -sys.maxint-1 if mid1 == 0 else nums1[(mid1-1)/2]  # Get L1, R1, L2, R2 respectively
            L2 = -sys.maxint-1 if mid2 == 0 else nums2[(mid2-1)/2]
            R1 = sys.maxint if mid1 == N1 * 2 else nums1[(mid1)/2]
            R2 = sys.maxint if mid2 == N2 * 2 else nums2[(mid2)/2]
            
            if L1 > R2: lo = mid2 + 1       # A1's lower half is too big; need to move C1 left (C2 right)
            elif L2 > R1: hi = mid2 - 1 # A2's lower half too big; need to move C2 left.
            else:return (max(L1,L2) + min(R1, R2)) / 2.0;   # Otherwise, that's the right cut.
        
        return -1;
 