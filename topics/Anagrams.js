// Anagram practice
//? An anagram of a string is another string that contains the same characters, only the order of characters can be different.eg: "listen" & "silent" are an anagram of each other

//? method 1 (sorting)

//? Using Built in function 
function areAnagrams(word1, word2) {
  if (word1.length !== word2.length) return false;

  // Sort the strings and compare
  const sortedWord1 = word1.split("").sort().join("");
  const sortedWord2 = word2.split("").sort().join("");

  return sortedWord1 === sortedWord2;
}
// solution 1: SORTING
function isAnagram(str1, str2) {
  // Normalize the strings by removing all whitespace and converting to lowercase
  const normalize = (str) => str.replaceAll(/s+/g, "").toLowerCase();
  const newStr1 = normalize(str1);
  const newStr2 = normalize(str2);
  if (newStr1.length !== newStr2.length) return false;
  const anagram =
    newStr1.split("").sort().join("") === newStr2.split("").sort().join("");
  return anagram;
};


console.log('testing', anagramPractice("listen", "silent"));
// console.log(areAnagrams("listen", "silent")); // true
// console.log(areAnagrams("listen", "silence")); // false

// let word1 ="listen"
// let word2 ="silent"
// if(areAnagrams(word1,word2)){
//     document.write("The two strings are anagram of each other")
// } else {
//     document.write("The two strings are not anagram of each other")
// }

//? Example 2
//? Without built in function
function areAnagramstttttt(word1, word2) {
    if (word1.length !== word2.length) return false;
    function sortString(str) {
      let arr = str.split("");
      console.log("arr.......",arr);
      for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] > arr[j]) {
            // Swap elements
            let temp = arr[i];
            // Assign the value of the next element to the current element
            arr[i] = arr[j];
            // Assign the value of the temporary variable to the next element
            arr[j] = temp;
          }
        }   
      }
      return arr.join("");
    }
  
    return sortString(word1) === sortString(word2);
  }
  function areAnagrams(word1,word2){
    if(word1.length !== word2.length) return false
    function sortString(str){
        let arr = str.split("")
        for(i=0; i < arr.length -1; i++){
          // debugger
          for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
              // Swap elements
              // Create a temporary variable to hold the value of the current element
              let temp = arr[i];
              // Assign the value of the next element to the current element
              arr[i] = arr[j];
              // Assign the value of the temporary variable to the next element
              arr[j] = temp;
            }
          }   
        }
        return arr.join("")
    }
    return sortString(word1) === sortString(word2)
  }
  // Example usage
  console.log(areAnagrams("triangle", "integral")); // true
  console.log(areAnagrams("triangles", "integral")); // false