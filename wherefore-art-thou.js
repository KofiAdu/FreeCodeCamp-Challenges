function whatIsInAName(collection, source) {
  const arr = [];
  // Only change code below this line
  
   collection.forEach(item =>{
     let i = 0
     for(let value in source){
       if(item[value] === source[value]){
         i = i +1
       }
       if(i === Object.keys(source).length){
         arr.push(item)
       }
     }
   })

  // Only change code above this line
  return arr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }))