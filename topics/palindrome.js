// This method involves iterating through the string from both ends (forward and backward) and comparing characters. If any characters do not match, we can immediately conclude that the string is not a palindrome.

// Steps:

// Loop from the start and end of the string simultaneously.
// Compare the characters at each index.
// If any pair of characters do not match, return false.
// If all characters match, return true.

let str1 = "racecar";
let str2 = "nitin";
let str3 = "Rama";
// method 1 using for loop
function isPalindrome(str) {
    let j = str.length - 1
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] != str[j]) {
            return false;
        }
        j--;
    }
    return true;
}

// console.log(isPalindrome(str1));
// console.log(isPalindrome(str2));
// console.log(isPalindrome(str3));


// Method 2 Checking the string from last
function isPalindrome(str) {
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    if (rev == str) {
        return true
    } else {
        return false;
    }
}
// console.log(isPalindrome(str1));
// console.log(isPalindrome(str2));
// console.log(isPalindrome(str3));

// Method 3: Using split(), reverse() and join() Methods
function isPalindrome(str) {
    let rev = str.split("").reverse().join("");

    if (rev == str) {
        return true
    }
    return false

}
// console.log(isPalindrome(str1));
// console.log(isPalindrome(str2));
// console.log(isPalindrome(str3));

function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, ''); // Normalize: lowercase, remove non-alphanumerics
    let reversed = str.split('').reverse().join('');  // Reverse the string
    return str === reversed; // Compare original and reversed strings
   }
   
// solution 2: using loop
function reverse(str) {
    let reversed = ""
    for(let i = str.length - 1; i >=0;i--){
        reversed += str[i]
    }
    return reversed
}
   function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, ''); // Normalize: lowercase, remove non-alphanumerics
    let reversed = reverse(str);  // Reverse the string (function mentioned above)
    return str === reversed; // Compare original and reversed strings
   }
   console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));