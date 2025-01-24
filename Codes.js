// Anagram Check
// solution 1: SORTING
   function isAnagram(str1, str2) {
    const normalize = (str) => str.replaceAll(/s+/g, "").toLowerCase();
    const newStr1 = normalize(str1);
    const newStr2 = normalize(str2);
    if (newStr1.length !== newStr2.length) return false;
    const anagram =
      newStr1.split("").sort().join("") === newStr2.split("").sort().join("");
    return anagram;
  };

  console.log('testing', isAnagram("listen", "silent"));
  
// solution 2: CHARACTER FREQUENCY
   function isAnagram(str1, str2) {

    function countFrequency(str) {
      const frequency = {};
  
      for (let char of str) {
        if (frequency[char]) {
          frequency[char]++; // Increment count
        } else {
          frequency[char] = 1; // Initialize count
        }
      }
  
      console.log("char frequency>>>", frequency);
      return frequency;
    }
    const normalize = (str) => str.replaceAll(/s+/g, "").toLowerCase();
    const newStr1 = normalize(str1);
    const newStr2 = normalize(str2);
    if (newStr1.length !== newStr2.length) return false;

    const strFrq1 = countFrequency(newStr1);
    const strFrq2 = countFrequency(newStr2);

    // Compare frequencies
    for (let char in strFrq1) {
      if (strFrq1[char] !== strFrq2[char]) return false;
    }
    return true
  }
  
 // Tree loop
 function name(max) {
  for(var i=0; i<= max; i++){
    let star = '';
    for(var j = 1; j <= max - i; j++){
        star += " *";
    };
    
    console.log(star);
  };
};  
 
 // SWAPPING VARIABLES
//  solution1: using variable
       let a = 5, b = 10;
       let temp = a; // a= 5, b=10, temp=5
       a = b; // a= 10, b=10, temp=5
       b = temp;// a= 10, b=5, temp=5
       console.log(a, b); // Output: 10, 5
       
// solution 2: using destructure
      //  let a = 5, b = 10;
      //  [b, a] = [a, b];
      //  console.log(a, b); // Output: 10, 5
       
// solution 3: mathematics
      //  let a = 5, b = 10;
      //  b = a + b; // a=5, b=15
      //  a = b - a; // a=10, b=15
      //  b = b - a; // a=10, b=5



// STRING REVERSAL
  function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
  }



// PALINDROME (palindrome reads words the same backward as forward)
// solution 1: using SORT
   function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, ''); // Normalize: lowercase, remove non-alphanumerics
    let reversed = str.split('').reverse().join('');  // Reverse the string
    return str === reversed; // Compare original and reversed strings
   }
   
// solution 2: using loop
   function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, ''); // Normalize: lowercase, remove non-alphanumerics
    let reversed = reverseString(str);  // Reverse the string (function mentioned above)
    return str === reversed; // Compare original and reversed strings
   }
   
   
// Remove duplicate
  function removeDuplicates(arr) {
    let unique = [];
    for (let i = 0; i < arr.length; i++) {
      let duplicate = false;
      for (let j = 0; j < unique.length; j++) {
        if (arr[i] === unique[j]) {
          duplicate = true
          break;
        }
      }
      if (!duplicate) unique.push(arr[i]);
    }
    return unique;
  }
   

// Custom MAP
  function customMap(arr, callback) {
    let array = [];
    for (let i = 0; i < arr.length; i++) {
      array[i] = callback(arr[i], i, arr);
    }
    return array;
  }
  
  Array.prototype.navinMap = function (callback) {
    let array = [];
    console.log("this>>", this);
    for (let i = 0; i < this.length; i++) {
      array[i] = callback(this[i], i, this);
    }
    return array;
  };
   
 
 // Longest string without repeating
//  solution 1: 
 function longestSubstring(str) {
    let unique = [];
    const newArray = str.split("");
    for (let i = 0; i < newArray.length; i++) {
      let duplicate = false;
      for (let j = 0; j < unique.length; j++) {
        if (newArray[i] === unique[j]) {
          duplicate = true;
          break;
        }
      }
      if (duplicate) {
        break;
      }
      unique.push(newArray[i]);
    }
    return unique.join('')
  }
 
 // Fibonacci Sequence (its a series of numbers in which each number is the sum of the two preceding ones)
   function fibonacciSequence(num) {
    if (num === 0) return [];
    if (num === 1) return [0];

    let sequence = [0, 1];
    while (sequence.length < num) {
      let sumValue =
        sequence[sequence.length - 1] + sequence[sequence.length - 2];
      sequence.push(sumValue);
    }
    return sequence;
  }
