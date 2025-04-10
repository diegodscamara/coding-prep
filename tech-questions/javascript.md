**🧠 1. What is the difference between var, let, and const?**

**Answer:**

• var: function-scoped, hoisted (initialized with undefined)
• let: block-scoped, not hoisted
• const: block-scoped, read-only (cannot be reassigned)
---

**⚙️ 2. What is a closure?**

**Answer:**

A closure is a function that retains access to its lexical scope even when the function is executed outside of that scope.

```jsx
function outer() {
  let count = 0;
  return function inner() {
    return ++count;
  };
}
```
---

**📦 3. What is the difference between == and ===?**

**Answer:**

• ==: compares values after type coercion
• ===: compares values *and* types (strict equality)
---

**📚 4. What is event delegation in JavaScript?**

**Answer:**

Event delegation is a technique of handling events at a higher level in the DOM rather than on each element. It uses event bubbling.

```jsx
document.body.addEventListener('click', (e) => {
  if (e.target.matches('.btn')) handleClick();
});
```
---

**⏳ 5. Explain the event loop.**

**Answer:**

JavaScript runs on a single thread and uses an event loop to manage async operations. Tasks go through:

• Call Stack
• Web APIs
• Callback Queue
• Event Loop (moves tasks to stack when it’s empty)
---

**🔄 6. What are Promises and async/await?**

**Answer:**

• A **Promise** is an object representing the eventual completion of an async operation.
• **async/await** is syntactic sugar for Promises, making async code easier to write/read.
---

**🚀 7. What is hoisting?**

**Answer:**

Hoisting is JavaScript’s default behavior of moving declarations to the top of their scope before code execution. var is hoisted with value undefined, but let and const are not initialized.
---

**🧱 8. Explain prototypal inheritance.**

**Answer:**

JavaScript objects can inherit from other objects via the prototype chain. obj.__proto__ points to its prototype.
---

**🔧 9. What are higher-order functions?**

**Answer:**

Functions that take other functions as arguments or return them.

Examples: map, filter, reduce.
---

**🔄 10. What is the difference between call(), apply(), and bind()?**

**Answer:**

• call: calls function with this and individual args
• apply: same, but with args as array
• bind: returns a new function with bound this
---

**📂 11. What is the this keyword?**

**Answer:**

this refers to the execution context. Its value depends on how a function is called:

• Global context: window
• Object method: the object
• Arrow functions: lexically bound
---

**🔀 12. Difference between shallow copy and deep copy?**

**Answer:**

• **Shallow copy** copies object references (Object.assign, spread)
• **Deep copy** duplicates all levels (structuredClone, or JSON.parse(JSON.stringify(...)))
---

**🪝 13. What are arrow functions and how are they different?**

**Answer:**

Arrow functions do **not** have their own this, arguments, or super. They’re shorter and lexically bind this.

```jsx
const add = (a, b) => a + b;
```
---

**🔒 14. How do you handle immutability in JavaScript?**

**Answer:**

Using spread syntax, Object.freeze, or libraries like Immer:

```jsx
const newState = { ...state, key: 'value' };
```
---

**🧰 15. What are modules in JavaScript?**

**Answer:**

Modules allow code reuse and separation. ES6 uses import/export:

```jsx
export const sum = (a, b) => a + b;
import { sum } from './math.js';
```
---

**🔍 16. What is the difference between null and undefined?**

**Answer:**

• null: intentional absence of value
• undefined: variable declared but not assigned
---

**📌 17. What is the difference between synchronous and asynchronous code?**

**Answer:**

Synchronous code blocks execution; async code (like setTimeout, Promises) allows non-blocking behavior.
---

**📜 18. What are template literals?**

**Answer:**

Template literals allow embedded expressions and multiline strings using backticks (`):
```js
const name = `Diego`;
const msg = `Hello, ${name}!`;
```
---

**📉 19. How does the 'typeof' operator work?**

**Answer:**

Returns a string indicating the type of the operand:
```js
typeof 42 // 'number'
typeof null // 'object' (legacy quirk)
```
---

**🧪 20. How do you handle errors in JavaScript?**

**Answer:**

Use try/catch blocks or catch() with Promises. Use finally for cleanup.
---

**📍 21. What is destructuring?**

**Answer:**

A concise way to extract values from arrays or objects:
```js
const [a, b] = [1, 2];
const { x, y } = { x: 10, y: 20 };
```
---

**🛒 22. What are JavaScript data types?**

**Answer:**

• Primitive: string, number, bigint, boolean, undefined, symbol, null
• Non-primitive: object, array, function
---

**🕹️ 23. What is a promise chain?**

**Answer:**

A series of .then() calls on a Promise to handle async steps in sequence.
---

**⚡ 24. What is debounce and throttle?**

**Answer:**

Both control function execution rate:
• Debounce: waits for pause
• Throttle: runs at intervals
Useful for scroll/input events
---

**📊 25. What are Map and Set?**

**Answer:**

Map stores key-value pairs, preserves insertion order.
Set stores unique values only.
---

**🧱 26. What is object destructuring with default values?**

**Answer:**

Assign values with fallback:
```js
const { a = 1, b = 2 } = obj;
```
---

**🧮 27. How do JavaScript arrays work internally?**

**Answer:**

Arrays are objects with numeric keys. JS engines optimize them for performance, but sparse arrays can be slower.
---

**🔧 28. What is the difference between forEach and map?**

**Answer:**

• forEach: executes for side-effects, returns undefined
• map: returns a new array
---

**📋 29. How can you clone an object in JavaScript?**

**Answer:**

Use spread `{...obj}`, Object.assign, or structuredClone for deep copy.
---

**📦 30. What are Immediately Invoked Function Expressions (IIFE)?**

**Answer:**

Functions that run as soon as they are defined:
```js
(function() { console.log('Run') })();
```
---