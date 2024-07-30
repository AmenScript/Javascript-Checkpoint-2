//String Manipulation Functions:

function reverseString(str) {
    const strRev =  str.split('').reverse().join('');
    console.log(strRev);
    return strRev
}

function countCharacters(str) {
    var numberOfCharacters = 0;
    for (let i = 0; i < str.length; i++) {
        numberOfCharacters ++;
    }
    return numberOfCharacters;
}

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

//Array Functions:

function findMaxMin(array) {
    var maxNumber = array[0];
    var minNumber = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maxNumber) {
            maxNumber = array[i];
        }
        if (array[i] < minNumber) {
            minNumber = array[i];
        }
    }
    return maxNumber, minNumber
}

function sumOfArray(array) {
    var sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum
}

function filterArray(array) {
    const filtredArray = array.filter(a => a >= 0);
    return filterArray
}

//Mathematical Functions:

function factorial(n) { 
    if (n === 0) { 
        return 1; 
    } 
    else { 
        return n * factorial( n - 1 ); 
    } 
} 

function checkPrime(n) {
    if (n === 1) {
      return false;
    }
    else if (n === 2) {
      return true;
    } 
    else {
      for (var i = 2; x < n; i++) {
        if (n % i === 0) {
          return false;
        }
      }
      return true;  
    }
  }

function fibonacci(num) {
    if (num == 1)
        return 0;
    if (num == 2)
        return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
}
