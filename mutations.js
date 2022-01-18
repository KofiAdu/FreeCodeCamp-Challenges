function mutation(arr) {
  let first = arr[0].toLowerCase()
  let second = arr[1].toLowerCase()
  
  for(let i = 0;i<second.length;i++){
    let rightMatch = first.indexOf(second[i])

    if(rightMatch === -1){
      return false
    }
  }
  return true
}

mutation(["hello", "hey"]);