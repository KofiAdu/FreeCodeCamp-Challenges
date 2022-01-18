function sumFibs(num) {

  let x = 0
  let y = 1
  let sum = 0

  while(x<=num){
    [x,y] = [x+y,x]

    if(y%2 !== 0){
       sum += y
    }

  }
  return sum;
}

console.log(sumFibs(75025))