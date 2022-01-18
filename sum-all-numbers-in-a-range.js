function sumAll(arr) {
  let newArr = []
  let min,max
  if(arr[0] < arr[1]){
     min = arr[0]
     max = arr[1]
  }else{
     max = arr[0]
     min = arr[1]
  }

  for(let i = min;i<=max;i++){
    newArr.push(i)
  }
  return newArr.reduce((sum, num) => sum + num, 0);
}

console.log(sumAll([1, 4]))