function spinalCase(str) {

  let newStr = str.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/-|_/g, " ").toLowerCase()
  let newStr1 = newStr.split(" ").join("-")
  return newStr1
}

console.log(spinalCase('AllThe-small Things'))