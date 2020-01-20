function sumOfDigits(num){
    var sum = 0;
   
    if(Number.isInteger(num) === false){
      return sum;
    }
    
    var str = num.toString();
    for(i = 0; i <= str.length - 1; i++){
      sum += +str[i];
    }
    
    return sum;
  }
  console.log(sumOfDigits(7895));