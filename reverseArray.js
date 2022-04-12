var array = [1, 2, 3, 4, 5, 6];

reverseArray = (arr,start,end) => {

    if(start>=end) return;

    
    let temp = arr[start];
    arr[start]=arr[end];
    arr[end]= temp;

    reverseArray(arr,start+1,end-1)

};

reverseArray(array,0,array.length-1);

console.log(array)
