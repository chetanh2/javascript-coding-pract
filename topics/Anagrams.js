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
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("listen", "silence")); // false

// let word1 ="listen"
// let word2 ="silent"
// if(areAnagrams(word1,word2)){
//     document.write("The two strings are anagram of each other")
// } else {
//     document.write("The two strings are not anagram of each other")
// }

//? Example 2
//? Without built in function
function areAnagrams(word1, word2) {
    if (word1.length !== word2.length) return false;
  
    function sortString(str) {
      let arr = str.split("");
      for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] > arr[j]) {
            let temp = arr[i];
            arr[i] = arr[j];
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
        let arr = str
    }
    return arr.join("")
  }
  // Example usage
  console.log(areAnagrams("triangle", "integral")); // true
  console.log(areAnagrams("triangles", "integral")); // false