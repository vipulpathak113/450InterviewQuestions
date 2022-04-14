var array = [-1, 2, -3, 4, 5, 6, -7, 8, 9];

rearrangeArray = (arr,start,end) => {

    while(start<=end){

        if(arr[start]<0 && arr[end]<0){
            start++;
        }
        else if(arr[start]>0 && arr[end]<0){
            let temp = arr[start];
            arr[start] =arr[end]
            arr[end] = temp;

            start++;
            end--;
        }
        else if(arr[start]>0 && arr[end]>0){
            end--;
        }
        else{
            start++;
            end--; 
        }

    }

};

rearrangeArray(array,0,array.length-1);

console.log(array)
