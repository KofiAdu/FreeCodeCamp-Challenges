function addTogether() {
  let arr= [...arguments]
  let res = 0
  for(let i =0;i<arr.length;i++){
    if(typeof(arr[i]) !== "number"){
      return undefined
    }else if(arr.length === 1){
      return function add(num){
        return addTogether(arr[0],num)
      }
    }else{
       res = arr.reduce((sum,x) => sum+=x,0 )
    }
  }

  // let res = arr.reduce((sum,x) => sum+=x,0 )
  return res;
}

console.log(addTogether(2)(5))