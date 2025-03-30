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
// arr.push("orange")

// ? remove from end of the array
// arr.pop()
// arr.pop() 

// ? Add to the Top of the Array
// arr.unshift("orange")
// console.log(arr);


// ? Remove from Top of the Array
// arr.shift()
// console.log(arr);

//! Looping in array

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    // console.log(element);
}

let i = 0
while(i < arr.length){
    // console.log("hello",arr[i]);

    i++
}

// ! Inbuilt Loop methods
const numbers = [1,2,3,4,5]
// ? map in js
// const newNum = numbers.map((item,index,array)=>{
//     return item + 5
// } )
// const newNum = numbers.map((item,index,array)=> item + 5)
// console.log(newNum);

//? filter in js // filter takes condition
// const newNum = numbers.filter((item,index,array)=>{
//     return item > 3
// } )
// console.log(newNum);

// ? Reduce in js // reduce takes 4 paramters => accumulator, currentValue, currentIndex, array
// ? reduce takes an arrya & reduces its value down to one value
const sum = numbers.reduce((prev,item)=>{
    return prev + item
} ,2)
// console.log(sum);

//? some in js
const res = numbers.some((item)=> item > 3)
// console.log(res);  // this will return either true or false

// ? every in js
const res1 = numbers.every((item)=> item > 3)
// console.log(res1); // it will check every single element if every element is greater than 3 than it will print true

//? find in js 
const res2 = numbers.find((item)=> item > 3)
// console.log(res2); // it will return the first element which it finds & meets the condition , if there is no item which is greater than 3 then it will return us undefined

// ! Spread & rest Operators
// ? spread
const arr1 = [1,2,3]
const arr2 = [4,5,6]
const arr3 = [...arr1,...arr2]  //? spread
// console.log(arr3);

// ? rest
// const arr4 = [1,2,3,4,5,6]
// const [a,b,...arr5] = arr4 //? rest
function sumRest(...numbers){
    return numbers
}
// console.log(sumRest(arr1,arr2));

// ! concat
arr1.concat