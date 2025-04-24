/*
# Hoisting in JavaScript

Let’s break it down with examples, key points, and common interview questions.
Hoisting in JavaScript is a behavior where **variable and function declarations** are moved to the top of their containing scope (global or function scope) during the compilation phase, before the code is executed. However, only the declarations are hoisted, not the initializations or assignments. This can lead to some unexpected behavior if not understood properly.

Let’s break it down with examples, key points, and common interview questions.

---

### Key Points About Hoisting
1. **Variable Hoisting**:
   - Variables declared with `var` are hoisted and initialized with `undefined`.
   - Variables declared with `let` and `const` are also hoisted but are not initialized (they remain in a "temporal dead zone" until their declaration is reached).
2. **Function Hoisting**:
   - Function declarations are fully hoisted, meaning you can call a function before its declaration in the code.
   - Function expressions (e.g., assigned to a variable) are not fully hoisted; only the variable declaration is hoisted.
3. **Precedence**: Meaning that if you declare a variable and a function with the same name, the function declaration will be hoisted firsthoisted
   - Function declarations take precedence over variable declarations with the same name.
4. **Scope**:
   - Hoisting occurs within the scope where the variable or function is declared (global or function scope).

---

### Examples of Hoisting

#### 1. Variable Ho> Hoisting with `var`
```javascript
console.log(x); // Output: undefined
var x = 5;
console.log(x); // Output: 5
```
**Explanation**:
- The declaration `var x` is hoisted to the top, so `x` exists but is `undefined` before the assignment.
- After `x = 5`, it holds the value `5`.

#### 2. Variable Hoisting with `let` and `const`
```javascript
console.log(y); // ReferenceError: Cannot access 'y' before initialization 
let y = 10;
```
**Explanation**:
- `let y` is hoisted, but it’s in the **temporal dead zone** (TDZ) until the declaration is reached, causing a `ReferenceError`.

#### 3. Function Declaration Hoisting
```javascript
greet(); // Output: Hello!
function greet() {
  console.log("Hello!");
}
```
**Explanation**:
- The entire function declaration is hoisted, so you can call `greet()` before its definition.

#### 4. Function Expression Hoisting
```javascript
console.log(myFunc); // Output: undefined
myFunc(); // TypeError: myFunc is not a function
var myFunc = function() {
  console.log("Hi!");
};
```
**Explanation**:
- Only the `var myFunc` declaration is hoisted, not the function expression. At the time of `myFunc()`, `myFunc` is `undefined`, causing a `TypeError`.

#### 5. Function vs. Variable Hoisting
```javascript
console.log(test); // Output: [Function: test]
var test = "string";
function test() {
  console.log("Function");
}
```
**Explanation**:
- The function declaration `test` is hoisted first, so `test` is a function initially. Later, it’s reassigned to the string `"string"`.

---

### Common Gotchas
1. **Using a variable before declaration**:
   ```javascript
   x = 10; // Implicit global variable
   console.log(x); // Output: 10
   var x;
   ```
   - `x` is treated as a global variable due to hoisting, even though it’s assigned before declaration.

2. **Temporal Dead Zone with `let`/`const`**:
   ```javascript
   {
     console.log(a); // ReferenceError
     let a = 1;
   }
   ```
   - `a` is hoisted but inaccessible until the `let` declaration.

---

### Interview Questions on Hoisting

#### 1. What is hoisting in JavaScript?
**Answer**:
Hoisting is JavaScript’s behavior of moving variable and function declarations to the top of their containing scope during compilation. Only declarations are hoisted, not initializations. Variables declared with `var` are initialized with `undefined`, while `let` and `const` remain uninitialized in the temporal dead zone.

#### 2. What will the following code output?
```javascript
console.log(a);
var a = 20;
```
**Answer**:
`undefined`
- `var a` is hoisted, so `a` exists but is `undefined` before the assignment.

#### 3. What’s the difference between `var`, `let`, and `const` in terms of hoisting?
**Answer**:
- `var`: Hoisted and initialized with `undefined`.
- `let` and `const`: Hoisted but not initialized, causing a `ReferenceError` if accessed before declaration (temporal dead zone).
- `const` requires an initializer and cannot be reassigned after declaration.

#### 4. What will this code output?
```javascript
foo();
var foo = function() {
  console.log("Function");
};
```
**Answer**:
`TypeError: foo is not a function`
- `var foo` is hoisted, making `foo` `undefined`. Calling `foo()` before assignment causes a `TypeError`.

#### 5. Explain the output of this code:
```javascript
console.log(x);
function x() {
  console.log("Function");
}
var x = 100;
```
**Answer**:
`[Function: x]`
- Function declarations are hoisted first, so `x` is a function. The `var x` declaration is hoisted but doesn’t override the function until the assignment `x = 100`.

#### 6. What happens if you try to access a `let` variable before its declaration?
**Answer**:
A `ReferenceError` is thrown because `let` variables are hoisted but remain in the temporal dead zone until their declaration is reached.

#### 7. Predict the output:
```javascript
{
  console.log(a);
  console.log(b);
  var a = "Hello";
  let b = "World";
}
```
**Answer**:
- `console.log(a)` outputs `undefined` (hoisted `var`).
- `console.log(b)` throws `ReferenceError` (hoisted `let` in TDZ).

#### 8. Why does this code work?
```javascript
myFunction();
function myFunction() {
  console.log("Works!");
}
```
**Answer**:
Function declarations are fully hoisted, so `myFunction` is available before its definition.

#### 9. What’s the output?
```javascript
var x = 1;
function x() {
  console.log("Function");
}
console.log(x);
```
**Answer**:
`1`
- The function `x` is hoisted first, but the `var x` declaration and assignment `x = 1` override it, so `x` is `1`.

#### 10. Fix this code to avoid hoisting issues:
```javascript
console.log(name);
var name = "John";
```
**Answer**:
Declare and initialize the variable before use:
```javascript
var name = "John";
console.log(name); // Output: John
```
Alternatively, use `let` or `const` and ensure declaration precedes usage to catch errors early.

---

### Tips for Interviews
1. **Explain Clearly**: Use terms like “hoisted,” “temporal dead zone,” and “scope” accurately.
2. **Use Examples**: Draw or write code to illustrate hoisting behavior.
3. **Know Edge Cases**: Be prepared for questions involving function vs. variable hoisting or TDZ.
4. **Practice Debugging**: Be ready to predict outputs or fix code with hoisting issues.

---

### Summary
- Hoisting moves declarations to the top of their scope.
- `var` variables are initialized with `undefined`; `let` and `const` are not.
- Function declarations are fully hoisted; function expressions are not.
- Understanding hoisting helps avoid bugs and is a common topic in JavaScript interviews.

If you’d like more examples, specific interview question practice, or a deeper dive into any aspect, let me know!
*/

// ! Closures
/*
Closures in JavaScript are a fundamental concept where a function retains access to variables from its outer (enclosing) scope even after the outer function has finished executing. This allows for powerful patterns like data encapsulation, private variables, and maintaining state.

Let’s break down closures with key points, examples, and common interview questions.

---

### Key Points About Closures
1. **Definition**: A closure is created when an inner function accesses variables from its outer function’s scope, and the inner function is returned or used outside the outer function.
2. **Lexical Scope**: Closures rely on JavaScript’s lexical scoping, where a function’s scope is determined by its position in the source code.
3. **Use Cases**:
   - Data privacy (mimicking private variables).
   - Maintaining state in asynchronous operations (e.g., callbacks, event handlers).
   - Creating function factories or currying.
4. **Memory Considerations**: Closures keep outer variables in memory until the inner function is no longer referenced, which can lead to memory leaks if not managed properly.

---

### Examples of Closures

#### 1. Basic Closure
```javascript
function outer() {
  let count = 0;
  function inner() {
    count++;
    console.log(count);
  }
  return inner;
}

const counter = outer();
counter(); // Output: 1
```
**Explanation**:
- `inner` has access to `count` from `outer`’s scope.
- Even after `outer` finishes, `count` persists in memory because `inner` (returned as `counter`) maintains a reference to it.
- Each call to `counter()` increments `count`.

#### 2. Private Variables with Closures
```javascript
function createPerson(name) {
  let age = 0;
  return {
    getName: function() {
      return name;
    },
    getAge: function() {
      return age;
    },
    growOlder: function() {
      age++;
    }
  };
}

const person = createPerson("Alice");
console.log(person.getName()); // Output: Alice
console.log(person.getAge()); // Output: 0
person.growOlder();
console.log(person.getAge()); // Output: 1
console.log(person.age); // Output: undefined (age is private)
```
**Explanation**:
- `age` and `name` are private to the closure created by `createPerson`.
- The returned object’s methods (`getName`, `getAge`, `growOlder`) form closures over `age` and `name`, allowing controlled access.

#### 3. Function Factory with Closures
```javascript
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);
console.log(add5(3)); // Output: 8
console.log(add10(3)); // Output: 13
```
**Explanation**:
- `makeAdder` returns a function that “closes over” `x`.
- `add5` and `add10` each have their own closure, retaining their respective `x` values (5 and 10).

#### 4. Closures in Loops (Common Pitfall)
```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
// Output (after 1 second): 3, 3, 3
```
**Explanation**:
- `var i` is function-scoped, so all `setTimeout` callbacks reference the same `i`, which is `3` after the loop ends.
- To fix this, use a closure or `let` (block-scoped):

**Fix with Closure**:
```javascript
for (var i = 0; i < 3; i++) {
  (function(j) {
    setTimeout(function() {
      console.log(j);
    }, 1000);
  })(i);
}
// Output: 0, 1, 2
```

**Fix with `let`**:
```javascript
for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
// Output: 0, 1, 2
```

#### 5. Event Handlers with Closures
```javascript
function setupButton(id) {
  const button = document.getElementById(id);
  let clicks = 0;
  button.addEventListener("click", function() {
    clicks++;
    console.log(`Button clicked ${clicks} times`);
  });
}

setupButton("myButton");
```
**Explanation**:
- The event handler forms a closure over `clicks`, maintaining its state across multiple clicks.

---

### Common Interview Questions on Closures

#### 1. What is a closure in JavaScript?
**Answer**:
A closure is a function that retains access to variables from its outer scope even after the outer function has executed. It’s created when an inner function is returned or used outside its enclosing function, preserving the outer function’s variables in memory.

#### 2. What will the following code output?
```javascript
function createCounter() {
  let count = 0;
  return function() {
    return count++;
  };
}
const counter = createCounter();
console.log(counter());
console.log(counter());
```
**Answer**:
`0`, `1`
- `counter` is a closure over `count`. Each call increments `count` and returns its previous value.

#### 3. How can closures be used to create private variables?
**Answer**:
Closures can encapsulate variables within a function’s scope, exposing only specific methods to interact with them. For example:
```javascript
function createBankAccount() {
  let balance = 0;
  return {
    deposit: function(amount) {
      balance += amount;
      return balance;
    },
    getBalance: function() {
      return balance;
    }
  };
}
const account = createBankAccount();
account.deposit(100);
console.log(account.getBalance()); // 100
console.log(account.balance); // undefined
```
- `balance` is private and only accessible via `deposit` and `getBalance`.

#### 4. What’s wrong with this code, and how would you fix it?
```javascript
for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
```
**Answer**:
It outputs `5, 5, 5, 5, 5` because `var i` is function-scoped, and all `setTimeout` callbacks reference the final value of `i` (5).
**Fixes**:
- Use a closure to capture `i`:
```javascript
for (var i = 0; i < 5; i++) {
  (function(j) {
    setTimeout(function() {
      console.log(j);
    }, 1000);
  })(i);
}
```
- Use `let` for block scoping:
```javascript
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
```
Both output: `0, 1, 2, 3, 4`.

#### 5. Write a function that creates a one-time-use function using a closure.
**Answer**:
```javascript
function once(fn) {
  let called = false;
  return function() {
    if (!called) {
      called = true;
      return fn();
    }
    return undefined;
  };
}

const sayHello = once(() => console.log("Hello!"));
sayHello(); // Output: Hello!
sayHello(); // Output: undefined
```
- The closure over `called` ensures the function runs only once.

#### 6. How do closures affect memory usage?
**Answer**:
Closures keep outer scope variables in memory as long as the inner function is referenced. This can cause memory leaks if closures are not properly managed (e.g., keeping references to large objects in event listeners).

#### 7. Create a function that memoizes results using a closure.
**Answer**:
```javascript
function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (key in cache) {
      return cache[key];
    }
    cache[key] = fn(...args);
    return cache[key];
  };
}

const slowFunction = (num) => {
  console.log("Computing...");
  return num * 2;
};
const memoized = memoize(slowFunction);
console.log(memoized(5)); // Computing... 10
console.log(memoized(5)); // 10 (from cache)
```
- The closure over `cache` stores results for reuse.

---

### Tips for Interviews
1. **Explain with Diagrams**: Describe how the inner function retains a reference to the outer scope’s variables.
2. **Highlight Use Cases**: Mention data privacy, state management, and function factories.
3. **Address Pitfalls**: Be ready to explain the `var` loop issue and fixes.
4. **Write Clean Code**: Demonstrate closures with practical examples like counters or memoization.

---

### Summary
- Closures allow functions to retain access to their outer scope’s variables.
- They enable private variables, state persistence, and function factories.
- Common pitfalls include loop issues with `var`, which can be fixed with closures or `let`.
- Closures are a frequent interview topic, so practice examples and edge cases.

If you want more examples, specific interview question practice, or a deeper dive into closures with hoisting interactions, let me know!
*/