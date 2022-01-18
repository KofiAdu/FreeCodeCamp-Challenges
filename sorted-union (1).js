function uniteUnique(arr) {
  let newArr = []

  for (var i = 0; i < arguments.length; i++) {
    // console.log(arguments[i])
    newArr.push(arguments[i])
  }
  
  let newArr2 = newArr.join().split(",")

  arr = [... new Set(newArr2)]

  return arr.map(Number); //convert string of arrays to numbers
}

console.log(uniteUnique([1, 2, 3], [5, 2, 1]))