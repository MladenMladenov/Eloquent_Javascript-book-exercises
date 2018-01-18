
var userInput = 8;
var chess = " "

for(var i  = 0; i <= userInput-1; i ++){
  
  for(var j = 0; j <= userInput -1; j++){
    
       if((j+i) % 2 == 0){
   
          chess+=" ";
   
     }else{
       
         chess+="#";
       
     }
    
  }
    chess+="\n";
}
console.log(chess);
