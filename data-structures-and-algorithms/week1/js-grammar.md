# JS Grammar: Map, for...of, return statements

## 📘 JavaScript Grammar Focus – Week 1: `Map`, `for...of`, `return`

### 🧩 1. `Map` – Efficient Key-Value Storage

The `Map` object in JavaScript is ideal for storing data in key-value pairs and offers **O(1)** average-time complexity for lookups and inserts — making it a must-know tool for problems like **Two Sum**, **Group Anagrams**, and **LRU Cache**.

```javascript
const map = new Map();
map.set('key', 42);
console.log(map.get('key')); // 42
```

### ✅ Key Benefits over Plain Objects:

- **Maintains insertion order**
- **Keys** can be of **any data type** (objects, functions, etc.)
- Optimized for frequent **add/remove** operations

### 🔧 Common Methods:

```javascript
map.set(key, value);   // Add or update
map.get(key);          // Retrieve
map.has(key);          // Check existence
map.delete(key);       // Delete entry
map.clear();           // Clear all entries
```

### 📌 Example Use Case: Frequency Counter

```javascript
function countLetters(str) {
  const freq = new Map();
  for (let char of str) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }
  return freq;
}
```

### 📚 External Resources:

- 🔗 [MDN – Map Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- 🔗[How to Use the JavaScript Map and Set Objects – Explained with Code Examples
](https://www.freecodecamp.org/news/javascript-map-and-set-objects-explained/)
- 📖 [JavaScript.info – Map and Set](https://javascript.info/map-set)
- [JavaScript for Beginners #15 - Maps
](https://www.youtube.com/watch?v=QtLbuFUI1I4)

---

### 🔁 2. `for...of` – Elegant Iteration over Iterables

The `for...of` loop allows you to iterate over iterable objects such as arrays, strings, maps, sets, etc.

```jsx
const nums = [10, 20, 30];
for (const num of nums) {
  console.log(num);
}
```

### ✅ When to Use:

- When you care about **values**, not indices
- Works with all **iterables** (arrays, sets, maps, strings)

### 🧠 Index Access (Using `.entries()`):

```javascript
for (let [i, v] of nums.entries()) {
  console.log(i, v);
}
```

### ⚠️ Comparison Table:

| Syntax | Iterates Over | Use For |
| --- | --- | --- |
| `for` | Numeric indices | C-style control loops |
| `for...in` | Object keys | Objects (not arrays!) |
| `for...of` | Iterable values | Arrays, Maps, Sets, Strings |

### 📚 External Resources:

- 🔗 [MDN – `for...of` Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
- 📺 [CodeAcademy – JS Loops Cheat Sheet](https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-loops/cheatsheet)

---

### 🔙 3. `return` – Control Flow & Early Exit

Use `return` to **exit a function** and optionally return a value. It’s essential in coding interviews for early exits and short-circuiting logic.

```javascript
function findMatch(arr, target) {
  for (const num of arr) {
    if (num === target) return true;
  }
  return false;
}
```

### 💡 Tips:

- Use **early returns** instead of deep nesting.
- Return a **default value** explicitly (e.g., `return -1` or `null`) to indicate failure cases.
- Avoid side effects near return statements unless well-documented.

### 📌 Real-World Pattern: Guard Clauses

```javascript
function isValid(user) {
  if (!user) return false;
  if (!user.name) return false;
  return true;
}
```

### 📚 External Resources:

- 🔗 [MDN – return](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)
- 📺 [JavaScript - Functions - Return](https://www.youtube.com/watch?v=FioqUnOGlq8)

---

### 🧪 Practice Snippet: Two Sum

```javascript
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i]; // ✅ early exit
    }
    map.set(nums[i], i);
  }
}
```

✅ **Core Techniques:**

- Early exit with `return`
- Hash map lookup (`map.has`)
- Efficient iteration with `for`

---

### 🧠 Wrap-up: What to Memorize This Week

| Concept | Must Know |
| --- | --- |
| `Map` | O(1) ops, object vs map, common methods |
| `for...of` | Syntax, values-only, `.entries()` for index |
| `return` | Guard clauses, early exit, function control |

---