//! Arrays - Declaration

// let person ={
//     name:"chetan",
//     age:25
// }

// let arr = ["apple","banana","cherry",person]

// console.log(arr[3].name);

// ! Arrays - Add and remove Elements
let arr = ["apple","banana","cherry"]

// ? Add to end of the array
arr.push("orange")

// ? remove from end of the array
// arr.pop()
// arr.pop() 

// ? Add to the Top of the Array
arr.unshift("orange")

// ? Remove from Top of the Array
arr.shift()
// console.log(arr);

//! Looping in array

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    // console.log(element);
    
}

let i = 0
while(i<arr.length){
    // console.log("hello",arr[i]);

    i++
}

// ! Inbuilt Loop methods
const numbers = [1,2,3,4,5]

//? map in js