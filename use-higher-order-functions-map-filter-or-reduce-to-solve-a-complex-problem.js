const squareList = arr => {
  // Only change code below this line
  let fList = arr.filter(item => item > 0 && Number.isInteger(item))

  let newArr = fList.map(x=> x**2)


  return newArr
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);