var array1 = [85, 25 ,1 ,32, 54, 6];
var array2 = [85 , 2 ]

unionArray = (arr1,arr2) => {

     return [...new Set([...arr1,...arr2])].length

};

var newArray=unionArray(array1,array2);

console.log(newArray)
