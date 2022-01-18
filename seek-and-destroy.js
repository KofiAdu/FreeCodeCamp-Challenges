function destroyer(arr) {
  let newArr = []
  let x = Object.values(arguments)[0]
  let y = Object.values(arguments).slice(1)
  

  for(let i = 0;i<x.length;i++){
    let z = x[i]
    if(y.indexOf(z) === -1){
      newArr.push(z)
    }
  }
  return newArr;
}


console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))