function translatePigLatin(str) {
  let vowels = ["a", "e", "i", "o", "u"]
  let ay = ["ay"]
  let way = ["way"]

  let newStr = str.split("")

  let pigLatin = []

  for (let i = 0; i < newStr.length; i++) {

    if (vowels.includes(newStr[i]) && i === 0) {
      pigLatin = newStr.join("") + way
      return pigLatin
    }

    if (vowels.includes(newStr[i])) {
      pigLatin = newStr.join("").slice(i) + newStr.join("").slice(0,i) + ay
      return pigLatin
    }

  }


  return newStr.join("") + ay;
}

console.log(translatePigLatin("consonant"))