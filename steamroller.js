function steamrollArray(arr) {
  let newArr = []
  let newArr2 = []
  let newArr3 = []

  for(let i = 0;i<arr.length;i++){
    newArr = newArr.concat(arr[i])
  }

  for(let i = 0;i<newArr.length;i++){
      newArr2 = newArr2.concat(newArr[i])
  }

  for(let i = 0;i<newArr2.length;i++){
      newArr3 = newArr3.concat(newArr2[i])
  }

  return newArr3;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]))