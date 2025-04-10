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

**🧠 16. What is TypeScript and how is it different from JavaScript?**

**Answer:**

TypeScript is a superset of JavaScript that adds static typing, interfaces, and better tooling. It compiles to plain JS.
---

**📐 17. What are interfaces in TypeScript?**

**Answer:**

Interfaces define the shape of an object. They support optional properties, readonly modifiers, and extension.
---

**🧬 18. What is the difference between interface and type?**

**Answer:**

Both define types, but:
• interface: extendable, preferred for objects
• type: more versatile (e.g., unions, intersections)
---

**🔢 19. What are enums in TypeScript?**

**Answer:**

Enums allow you to define a set of named constants:
```ts
enum Role { Admin, User, Guest }
```
---

**🔍 20. What is type inference?**

**Answer:**

TypeScript can automatically infer types based on values, reducing the need for explicit annotations.
---

**🔀 21. What is union and intersection type?**

**Answer:**

• Union (|): one of multiple types
• Intersection (&): all combined types
```ts
let val: string | number;
```
---

**📦 22. What are generics in TypeScript?**

**Answer:**

Generics allow reusable code with flexible types:
```ts
function identity<T>(arg: T): T { return arg; }
```
---

**🧱 23. What is a tuple in TypeScript?**

**Answer:**

A fixed-length array with defined types for each position:
```ts
const tuple: [string, number] = ['age', 30];
```
---

**📚 24. What are utility types in TypeScript?**

**Answer:**

Built-in helpers like Partial<T>, Pick<T, K>, Omit<T, K>, Required<T> for transforming types.
---

**🔐 25. How does type narrowing work in TypeScript?**

**Answer:**

Using control flow (typeof, instanceof, in, equality checks) to refine types within blocks.
---

**🧰 26. What is the unknown type?**

**Answer:**

A type-safe counterpart to `any`. Must be narrowed before usage.
---

**🪝 27. What are type assertions in TypeScript?**

**Answer:**

You can tell the compiler a value's type using `as` or angle brackets:
```ts
const el = document.getElementById('id') as HTMLDivElement;
```
---

**🧪 28. What are declaration files (.d.ts)?**

**Answer:**

They describe the shape of JS libraries to TypeScript, enabling type support in JS codebases.
---

**🧬 29. How does structural typing work in TypeScript?**

**Answer:**

Type compatibility is based on members’ structure rather than explicit declarations (duck typing).
---

**⚙️ 30. What are mapped types in TypeScript?**

**Answer:**

Mapped types create new types from existing keys:
```ts
type ReadOnly<T> = { readonly [K in keyof T]: T[K] };
```
---