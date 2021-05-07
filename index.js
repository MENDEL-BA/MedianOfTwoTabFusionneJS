/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {

  var newArr = nums1.concat(nums2);

  console.log("Sort the array, if not, the resulat is wrong  ", newArr.sort());

  var tailleTab = newArr.length;
  var tailleTabMinusOne = newArr[tailleTab/2] - 1;
  console.log("le tailleTab  ", tailleTab);
  if(tailleTab % 2 === 0) {
    console.log("le median du tab pair est ",(newArr[tailleTab/2] + tailleTabMinusOne)/2)

  } else {
    console.log("le median du tab est ",Math.trunc(tailleTab/2) +1)
  }


};

findMedianSortedArrays([1,2,3], [7,5,6])