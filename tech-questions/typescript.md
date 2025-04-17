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
**🔢 31. What is the 'never' type?**

**Answer:**

The `never` type represents values that never occur, such as functions that always throw errors or have infinite loops.
---
**🔑 32. How do you use the 'keyof' operator?**

**Answer:**

`keyof T` produces a union of literal types corresponding to the property keys of type `T`.
---
**📜 33. How do you use the 'typeof' type operator?**

**Answer:**

In type contexts, `typeof x` extracts the type of variable `x`. It is useful for reflecting the type of existing values.
---
**🔄 34. What are conditional types?**

**Answer:**

Conditional types (`T extends U ? X : Y`) allow selecting one of two types based on a condition.
---
**🧩 35. How is the 'infer' keyword used in conditional types?**

**Answer:**

Within conditional types, `infer R` extracts a type variable from another type. E.g.,
```ts
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
```
---
**🗒️ 36. What are template literal types?**

**Answer:**

Template literal types comprise string literal types constructed via template literal syntax, e.g., `type Greeting = `Hello ${string}`;`.
---
**📦 37. What is the Record<K, T> utility type?**

**Answer:**

`Record<K, T>` constructs an object type with keys of type `K` and values of type `T`.
---
**🔧 38. What are the ReturnType and Parameters utility types?**

**Answer:**

`ReturnType<T>` extracts the return type of function type `T`; `Parameters<T>` extracts a tuple of parameter types of function `T`.
---
**🔢 39. How do you write function overloads in TypeScript?**

**Answer:**

Provide multiple function signatures above the implementation; TypeScript resolves the call based on the matching signature.
---
**📦 40. What are namespaces and how do they differ from modules?**

**Answer:**

Namespaces (formerly internal modules) group related types and values in a named scope; modules (ESM) are file-based and use `import`/`export`.
---
**🎨 41. What are decorators in TypeScript?**

**Answer:**

Decorators are an experimental feature to annotate or modify classes and class members at design time using the `@decorator` syntax.
---
**🔗 42. What is declaration merging?**

**Answer:**

Declaration merging allows multiple declarations with the same name (e.g., interfaces or namespaces) to combine their members into a single definition.
---
**🏫 43. What are abstract classes and how are they used?**

**Answer:**

Abstract classes cannot be instantiated directly and may contain abstract methods that subclasses are required to implement.
---
**🔄 44. What are mixins and how do you implement them?**

**Answer:**

Mixins are functions that return a class extending a base class, allowing composition of behaviors in a class hierarchy.
---
**🛠️ 45. How do you configure path aliases in tsconfig?**

**Answer:**

Use `compilerOptions.baseUrl` and `compilerOptions.paths` in `tsconfig.json` to map module paths to custom directory structures.
---
**🛡️ 46. What are key tsconfig options for strict mode?**

**Answer:**

`strict`, `noImplicitAny`, `strictNullChecks`, `strictPropertyInitialization`, `noImplicitThis`, and related strict flags.
---
**🛡️ 47. What is a type guard and how do you create one?**

**Answer:**

A type guard is a function returning a boolean that narrows types, declared with `x is Type` in the return type, e.g., `function isString(x: any): x is string`.
---
**📌 48. How do you use the 'as const' assertion?**

**Answer:**

Adding `as const` after a literal makes its type a readonly literal type, preserving exact values in tuples or objects.
---
**🌐 49. How do you extend global interfaces like Window?**

**Answer:**

Use declaration merging in a `.d.ts` file:
```ts
declare global {
  interface Window { myProp: string; }
}
```
---
**⚠️ 50. What is the difference between @ts-ignore and @ts-expect-error?**

**Answer:**

`@ts-ignore` suppresses errors on the next line; `@ts-expect-error` expects an error and reports if none occurs.
---