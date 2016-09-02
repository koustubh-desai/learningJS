var primes = [2, 3];
var kd = 0;

function GeneratePrimes(num) {
  //create a clone for now

  var result = [];

  //if num is 1 then there are no more prime factors to be found
  /*while(num!=1){
    
  }*/
  for (var i = 0; i < primes.length; i++) {
    //reset factor count
    var count = 0;

    while (num % primes[i] == 0) {
      num = num / primes[i];
      ++count;
    }
    if (count) {
      result.push(primes[i]);
      result.push(count);
    }
    // at this point there are two options. Either the num becomes 1 or there are more prime factors but not in the         //list
    if (num > 1 && i == primes.length - 1) {
      //Generate 1 or two more primes
      var arr = [];
      ++kd;
      arr[0] = kd * 6 - 1;
      arr[1] = kd * 6 + 1;
      //compare these two numbers with exisiting primes
      for (var j = 0; j < primes.length; j++) {
        if (arr.length == 2 && arr[1] % primes[j] == 0) arr.pop();
        if (arr.length && arr[0] % primes[j] == 0) arr.shift();
        if (arr.length == 0) break;
      }
      if (arr.length) {
        primes = primes.concat(arr);
      }
    }
    //if this loop is executed then the list of primes is extended by 1 or 2
  }
  return result;
}

//Call the function like this
console.log(GeneratePrimes(26));
