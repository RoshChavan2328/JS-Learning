let arr=[3,6,1,7];
let temp;
  for(let i=0 ;i<arr.length-1;i++){
       for(let j=0;j<arr.length-i-1;j++){
         if(arr[j]>arr[j+1]){
            temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
         }
       }
  }

console.log(arr);

console.table({
    SmallestElement : arr[0],
    LargestElement : arr[lastIndex-1]
});

