
var merge = function(nums1, m, nums2, n) {
    arr = new Array(m+n)

    var i = 0
    var j = 0
    var k = 0

    while(i < m && j < n){
    	if (nums1[i] < nums2[j]) {arr[k++] = nums1[i++];}
    	else{arr[k++] = nums2[j++];}
    }

    while (i<m){arr[k++] = nums1[i++]; }
    while (j<n){arr[k++] = nums2[j++]; }

    for (var k =0; k<m+n;k++){nums1[k] = arr[k]}
   
};

var nums1 =[1,2,3,0,0,0]
var nums2=[2,5,6]
merge(nums1, 3, nums2,3)
console.log(nums1)