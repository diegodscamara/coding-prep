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
  
**🌀 31. What is a generator function and the yield keyword?**

**Answer:**

Generator functions, declared with `function*`, return iterators. The `yield` keyword pauses the function and returns a value. You can resume execution with `.next()`.
---
**🔣 32. What is the Symbol type and how is it used?**

**Answer:**

`Symbol` creates unique identifiers, often used as object property keys to avoid collisions: `const id = Symbol('id');`.
---
**📃 33. How do you use the spread operator in function calls?**

**Answer:**

The spread operator `...` expands an iterable into individual arguments: `Math.max(...nums)`.
---
**📦 34. What is the rest parameter syntax in functions?**

**Answer:**

Rest parameters collect remaining arguments into an array: `function f(a, b, ...rest) { /* rest is an array */ }`.
---
**🌐 35. What is the difference between Map and Object for key-value storage?**

**Answer:**

`Map` allows any value as keys, preserves insertion order, and has a `size` property. Objects only allow string or symbol keys and inherit from prototypes.
---
**🗑️ 36. What are WeakMap and WeakSet?**

**Answer:**

`WeakMap` and `WeakSet` hold weak references to objects, preventing memory leaks. They are not iterable and do not prevent garbage collection.
---
**🚪 37. What is optional chaining (?.) and how does it work?**

**Answer:**

Optional chaining `obj?.prop` safely accesses nested properties, returning `undefined` if any reference is `null` or `undefined`.
---
**✨ 38. What is the nullish coalescing operator (??) and how does it work?**

**Answer:**

`a ?? b` returns `a` if it is not `null` or `undefined`; otherwise, it returns `b`.
---
**🔭 39. How do you iterate over object properties?**

**Answer:**

Use `Object.keys()`, `Object.values()`, `Object.entries()`, or `for...in` with `hasOwnProperty` checks.
---
**❄️ 40. What is the purpose of Object.freeze()?**

**Answer:**

`Object.freeze(obj)` prevents adding, deleting, or changing properties of `obj`.
---
**➕ 41. What is the purpose of Object.assign()?**

**Answer:**

`Object.assign(target, ...sources)` copies enumerable own properties from sources to the target object.
---
**🔀 42. How does prototypal inheritance differ from classical inheritance?**

**Answer:**

Prototypal inheritance uses object prototypes linked via `__proto__`. Classical inheritance defines classes and subclasses; ES6 classes are syntax sugar over prototypes.
---
**🏫 43. How do ES6 classes work compared to constructor functions?**

**Answer:**

ES6 `class` syntax provides a clearer syntax for constructors and methods, but under the hood, it uses prototypal inheritance similar to constructor functions.
---
**🕵️ 44. What is a Proxy object and what is it used for?**

**Answer:**

`new Proxy(target, handler)` lets you intercept and customize operations like property lookup, assignment, and function calls on the target object.
---
**🪞 45. What is the Reflect API?**

**Answer:**

`Reflect` provides methods corresponding to proxy handlers (e.g., `Reflect.get`, `Reflect.set`) for default behavior and meta-programming.
---
**🪙 46. What is tail call optimization?**

**Answer:**

Tail call optimization reuses the current stack frame for function calls in tail position, preventing stack overflows in recursive functions (ES6 spec).
---
**🔄 47. What are microtasks and macrotasks in the event loop?**

**Answer:**

Macrotasks (e.g., `setTimeout`) execute in the task queue; microtasks (e.g., Promises) execute in the microtask queue after the current task but before the next one.
---
**⏱️ 48. What is the difference between setTimeout(fn, 0) and Promise.resolve().then(fn)?**

**Answer:**

`setTimeout(fn, 0)` schedules a macrotask, while `Promise.resolve().then(fn)` schedules a microtask, which runs sooner.
---
**🧐 49. How can you detect the type of an object in JavaScript?**

**Answer:**

Use `typeof` for primitives, `Array.isArray()` for arrays, `instanceof` for class instances, or `Object.prototype.toString.call(obj)` for precise types.
---
**🌊 50. Explain event bubbling and event capturing in the DOM.**

**Answer:**

Event capturing propagates events from the document root down to the target; bubbling propagates from the target up to the root. Use `addEventListener` with the third `capture` argument to specify the phase.
---