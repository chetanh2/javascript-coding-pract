
// function reverseString(str) {
//     let reversed = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
//     return reversed;
//   }

//   console.log(reverseString("hello"));

  // This function takes a string as an argument and returns a new string that is the reverse of the original string
  // It does this by looping through the string from the end to the beginning
  // In each iteration of the loop, it adds the current character to a new string
  // At the end of the loop, the new string is returned
    function reverse(str) {
        let reversed = ""
        for(let i = str.length - 1; i >=0;i--){
            reversed += str[i]
        }
        return reversed
    }
  console.log(reverse("natehc"))