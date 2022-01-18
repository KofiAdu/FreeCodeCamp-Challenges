function smallestCommons(arr) {

  let arr2 = []
  let low;
  let high;

  if(arr[0]<arr[1]){
    low = arr[0]
    high = arr[1]
  }else{
    low = arr[1]
    high = arr[0]
  }

  for(let i = low;i<=high;i++){
    arr2.push(i)
  }

  let i = 1;
   let res;
   while(arr2.every(item=>res%item==0)==false){
      i++;
      res = arr[1]*i;
   }
   return res;

  
  // return arr2;
}

console.log(smallestCommons([1,5]))