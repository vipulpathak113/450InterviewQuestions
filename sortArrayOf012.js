// Question : Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.

// Example 1:

// Input:
// N = 5
// arr[]= {0 2 1 2 0}
// Output:
// 0 0 1 2 2
// Explanation:
// 0s 1s and 2s are segregated
// into ascending order.

var array = [0, 2, 1, 2, 0];

sort012 = (arr, n) => {
  let zeroCount = 0;
  let oneCount = 0;
  let twoCount = 0;

  for (var i = 0; i < n; i++) {
    if (arr[i] == 0) {
      zeroCount++;
    } else if (arr[i] == 1) {
      oneCount++;
    } else if (arr[i] == 2) {
      twoCount++;
    }
  }
  let j = 0;
  while (zeroCount !== 0) {
    arr[j] = 0;
    j++;
    zeroCount--;
  }
  while (oneCount !== 0) {
    arr[j] = 1;
    j++;
    oneCount--;
  }
  while (twoCount !== 0) {
    arr[j] = 2;
    j++;
    twoCount--;
  }
};

sort012(array, 5);

console.log(array);
