// map,  filter, reduce
// ? what is map ?

const numbers = [1, 2, 3, 4, 5];

const multiplyThree = numbers.map((num, index, array) => {
  console.log(index);
  return num * 3 + index;
});

console.log("multiplyThree", multiplyThree);

//? filter in js // filter takes condition
const moreThanThree = numbers.filter((item, index, array) => {
  return item > 3;
});
console.log("moreThanThree", moreThanThree);

//? Reduce method // reduce method reduces the value of an array down to just one value
// ? reduce takes an array & reduces its value down to one value
// ? accumulator is the result of the previous computation
// ? if there's no initial value it takes first element of array as initial value for accumulator
const sum = numbers.reduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);
console.log(sum);

// ! Creating each one of the buit in function from scratch which is known as Polyfill
// ? Polyfill for map()
// map syntax => Array.map((num,i,arr) => {})

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

const multiplyThreeUsingMyMap = numbers.myMap((num, index, array) => {
  console.log(index);

  return num * 3;
});
console.log("chetuMap", multiplyThreeUsingMyMap);

// ? Polyfill for filter()

Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};

const moreThanThreeUsingMyFilter = numbers.myFilter((item, index, array) => {
  return item > 3;
});
console.log(moreThanThreeUsingMyFilter);

// ? Polyfill for reduce()
// arr.reduce((acc,curr,i,arr) => {},initialValue)

Array.prototype.myReduce = function (cb, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};
const sumUsingMyReduce = numbers.myReduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);
console.log(sumUsingMyReduce);

// ! Ouput Based Questions based on map, filter, reduce
// ? Question 1 - Return only name of students in Capital

let students = [
  { name: "Piyush", rollNumber: 31, marks: 80 },
  { name: "Chetan", rollNumber: 15, marks: 69 },
  { name: "Kishore", rollNumber: 18, marks: 35 },
  { name: "Kiran", rollNumber: 5, marks: 55 },
];
// using for loop
let names = []
for(let i = 0;i < students.length;i++){
    names.push(students[i].name.toUpperCase())
}
console.log(names);

// using map
const names1 = students.map((student)=> student.name.toUpperCase())
console.log(names1);

// Question 2 - Return only details of those who scored more than 60 marks 

const moreThan60 = students.filter((student)=> student.marks > 60)
console.log(moreThan60);

//Question 3 - Return only details of those who scored more than 60 marks & rollNumber greater than 15
const moreThan60AndRollnoMoreThan15 = students.filter((stu) => stu.marks > 60 && stu.rollNumber > 15)
console.log(moreThan60AndRollnoMoreThan15);

// QUestion 4 - Sum of marks of all students
const sumOfMarks = students.reduce((acc,curr)=>{
  return acc + curr.marks;
},0)
console.log(sumOfMarks);

// Question 5 -> use chaining
// question -> Return only names of students who scored more than 60

const namesOfStuScoredMoreThan60 = students.filter((stu) => stu.marks > 60).map((stu)=> stu.name) 
console.log(namesOfStuScoredMoreThan60);

// document.getElementById("test").innerHTML = `<h1>${namesOfStuScoredMoreThan60.join(", ")}</h1>`

// ? Question 6 
// Return total marks for students with marks greater than 60 after 20 marks haven been added to those who scored less than 60

const totalMarks = students.map((stu)=>{
  if(stu.marks < 60){
    stu.marks += 20
  }
  return stu
}).filter((stu)=> stu.marks > 60).reduce((acc,curr) => acc + curr.marks,0)
console.log(totalMarks);
