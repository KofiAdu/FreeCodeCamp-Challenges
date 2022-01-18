function myReplace(str, before, after) {
  let newStr = str.split(" ")
  
  // let x = Object.values(before).join("")
  // let y = Object.values(after).join("")

  for(let i = 0; i<=newStr.length;i++){
    if(newStr[i] === before){
      if(newStr[i][0] === newStr[i][0].toUpperCase()){
        after = after[0].toUpperCase() + after.slice(1)
      }else if(newStr[i][0] === newStr[i][0].toLowerCase()){
        after = after[0].toLowerCase() + after.slice(1)
      }
      newStr[i] = after
    }
  }
  
  return newStr.join(" ");
}

console.log(myReplace("I think we should look up there", "up", "Down"))