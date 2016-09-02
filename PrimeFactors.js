var listOfPrimes = [2,3];
var kd = 0;

function GeneratePrimes(num){
    //create a clone for now
  var result = [];

    //if num is 1 then there are no more prime factors to be found
  /*while(num!=1){
    
  }*/
  for(var i=0; i<listOfPrimes.length;i++){
    //reset factor count
    var count = 0;
    var prime = listOfPrimes[i];
    while(num%prime == 0){
        num = num/prime;
        ++count;
    }
    if(count){
        result.push(prime);
        result.push(count);
    }
    // at this point there are two options. Either the num becomes 1 or there are more prime factors but not in the         //list
    if(num>1 && i==listOfPrimes.length-1){
        //Generate 1 or two more primes
      var arr = [];
      ++kd;
      arr[0] = kd*6 - 1;
      arr[1] = kd*6 + 1;
      //compare these two numbers with exisiting primes
      for(var j=0;j<listOfPrimes.length;j++){
            if(arr.length == 2 && arr[1]%prime == 0)arr.pop();
            if(arr.length && arr[0]%prime == 0)arr.shift();
            if(arr.length==0)break;
        }
      if(arr.length){
            listOfPrimes = listOfPrimes.concat(arr);
      }
    }
    //if this loop is executed then the list of primes is extended by 1 or 2
  }
  return result;
}
console.log(GeneratePrimes(193456782));
