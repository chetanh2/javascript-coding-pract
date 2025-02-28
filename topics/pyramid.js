// Function to print a pyramid of stars
// // Takes one argument, the number of rows the pyramid should have
// function pyramid(r){
//     // Loop through each row of the pyramid
//     for(let i=1;i<=r;i++){
//         // Create an empty string
//         let str ="";
//         // Add spaces to the string equal to the difference in the row number
//         // and the number of rows. This is done to create the pyramid shape
//         for(let j=1;j<=r-i;j++){
//             str += " "
//         }
//         // Add stars to the string equal to twice the row number minus one
//         // This is done to create the pyramid shape
//         for(let k=1;k <=(2 * i-1);k++){
//             str +="*"
//         }
//         // Print the string
//             console.log(str)
//     }
// }
// pyramid(5)

function pyramidExample(t){
    for(let i = 1; i <= t; i++){
        let str = ""
        for(let c = 1; c <= t-i;c++){
            str += " "
        }
        for(let h = 1; h <= (2 * i - 1);h++){
            str += "*"
        }
        console.log(str)
    }
}
pyramidExample(4)


// For triangle
const rows = 5;

// Outer loop for each row
for (let i = 1; i <= rows; i++) {
  let stars = '';
  // Inner loop to build the string of stars
  for (let j = 1; j <= i; j++) {
    stars += '*';
  }
  console.log(stars);
}

