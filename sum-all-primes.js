function sumPrimes(num) {
  let arr = []

  if(num<2){return false}

  const isPrime = n => {
  for (let i = 2; i <n; i++) if (n % i === 0) return false;
  return n > 1;
 }
  
  for(let i =2;i<=num;i++){
     arr.push(i)
  }

  let arr2 = arr.filter(x => isPrime(x)).reduce((sum,j) => sum +j)

  return arr2;
}

console.log(sumPrimes(977))