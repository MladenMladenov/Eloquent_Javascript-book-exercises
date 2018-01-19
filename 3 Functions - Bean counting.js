

function countBs(stringInput){
  var b = "B";
  var count = 0;
  for(var i = 0; i <= stringInput.length; i++){
    if(stringInput.charAt(i) == "B"){
      count++;
    }
  }
  return count;
}

console.log(countBs("BBCNNBBSWDAS"));


function countChar(stringInput, charToSearch){
  
  var count = 0;
  for(var i = 0; i <= stringInput.length; i++){
    if(stringInput.charAt(i) == charToSearch){
      count++;
    }
  }
  return count;
}


console.log(countChar("BBCNNBBSWDAS","W"));
