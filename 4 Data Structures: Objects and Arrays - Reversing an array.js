var a = [1,2,3,4,5];

function reverseArray(arr){
  
  var reversed = [];
  
  var checker = arr.length;
  
  for(i = arr.length; i >= 1; i--){
    
   reversed.push(i);
    
  }
  
  return(reversed);
  
}

console.log(reverseArray(a));
