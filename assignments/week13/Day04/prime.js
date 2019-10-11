/*jshint esversion:8*/
//function isPrime to check if a number is prime number or not
function isPrime (arg) {
  var conclusion;
  if(arg===2){
    console.log("2 is A PRIME NUMBER");
    return true;
  } else {
  for (var i = 2; i < arg; i++) {
    var remZero = (arg%i===0) ? true : false;
    if(remZero){
      conclusion = arg+"is NOT A PRIME NUMBER";
      break;} else {
        conclusion = "checkNext";
      }
  }
  if(conclusion === "checkNext"){
    console.log(arg + " is  A PRIME NUMBER");
    return true;
  } else {
    console.log(conclusion);
    return false;
  }
  }
}

isPrime(23);
isPrime(101);
isPrime(143);
isPrime(201);
isPrime(2);
isPrime(9);

//function firstPrimeNumbers prints the list of fist prime numbers till given number as input
function firstPrimeNumbers (N) {
  var listOfPrimes = [];
  for (let check = 2; listOfPrimes.length <= N; check++) {
    if(isPrime(check)){
      listOfPrimes.push(check);
    }
  }
  console.log(listOfPrimes);
}

firstPrimeNumbers(11);
firstPrimeNumbers(5);
firstPrimeNumbers(3);
