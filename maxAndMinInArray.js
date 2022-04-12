var array = [1000, 11, 445, 1, 330, 3000];

maxMinArray = (arr, min, max) => {
  if (arr.length == 1) {
    min = arr[0];
    max = arr[0];
  }

  if (arr.length > 1) {
    if (arr[0] > arr[1]) {
      max = arr[0];
      min = arr[1];
    } else {
      max = arr[1];
      min = arr[0];
    }
  }

  for (var i = 2; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }

    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return { min, max };
};

var { min, max } = maxMinArray(array, (min = 0), (max = 0));

console.log("min", min);
console.log("max", max);
