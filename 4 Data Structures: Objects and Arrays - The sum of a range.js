function range(start,end,step){
  if(step == null){
    step = 1;
  }
  var arr = [];
  
  for(i = start; i <= end; i+=step){
    
    arr.push(i);
  
  }
  return arr;
}


function sum(arrayForSum){
  var result = 0;
  
  for(i = 0; i<=arrayForSum.length; i++){
    result+=i;
  }
  return result;
}

console.log(range(1,10));
console.log(sum(range(1, 10)));
