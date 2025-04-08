# Concept: Hash Maps, Single-pass traversal

## 🧠 Concept Class – Week 1: Two Sum (Hash Map Pattern)

### ✅ Objective

Learn how to solve the **Two Sum** problem efficiently using:

- A **Hash Map** (aka object or `Map`)
- A **single-pass traversal** to achieve **O(n)** time complexity
- A reusable problem-solving **pattern** for many interview challenges

---

### 📌 Problem Statement

> Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
> 

🧠 **Constraints**:

- Exactly one valid solution.
- You **may not** use the same element twice.

```jsx
Input:  nums = [2, 7, 11, 15], target = 9
Output: [0, 1]  // nums[0] + nums[1] == 9
```

---

### 🧩 Key Concepts

### 1. ❌ Brute Force – O(n²)

Compare each pair of elements using nested loops.

```jsx
for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    if (nums[i] + nums[j] === target) return [i, j];
  }
}
```

- ❗ Inefficient for large input
- ❌ Not scalable — fails performance tests on platforms like LeetCode

---

### 2. ✅ Optimized Approach – O(n) using Hash Map

```jsx
const map = new Map();
for (let i = 0; i < nums.length; i++) {
  const diff = target - nums[i];
  if (map.has(diff)) return [map.get(diff), i];
  map.set(nums[i], i);
}
```

✅ Uses:

- Single pass
- Constant-time lookups with `Map`
- No duplicate elements used

---

### 🧠 Why Use a Hash Map?

| Feature | Reason |
| --- | --- |
| O(1) average lookup time | Fast check for complement values |
| Key → Index mapping | Allows instant return of correct index pair |
| Space-for-speed tradeoff | Extra memory for much better performance |

---

### 🚀 Step-by-Step Strategy (Pattern)

| Step | Action |
| --- | --- |
| 1 | Initialize an empty Map |
| 2 | Loop through the array |
| 3 | Calculate `complement = target - currentNum` |
| 4 | If `complement` is in the map → return indices |
| 5 | Otherwise, add `currentNum → index` to map |

> 💡 This is a core "Seen Elements" pattern – remember what you’ve seen as you iterate.
> 

---

### ⚠️ Common Pitfalls

- ❌ **Using the same element twice** (e.g., don’t return the same index twice)
- ❌ **Returning inside nested loops** in brute force
- ❌ **Using `Object` instead of `Map`** (Object has key collisions from prototypes)

---

### 🧪 Test Cases (Write These in Code!)

| Case | Input | Target | Output |
| --- | --- | --- | --- |
| Basic | [2, 7, 11, 15] | 9 | [0, 1] |
| Negatives | [3, -1, 4, 2] | 1 | [1, 3] |
| Duplicates | [3, 3] | 6 | [0, 1] |
| Large Input | [1, 2, …, 99999] | 199998 | [99997, 99998] |

---

### 🔥 Interview Tip

Always ask:

- **Are values unique?**
- **Can elements be negative?**
- **What if there’s no solution?**
- **Should you return values or indices?**

> In real interviews, always start with brute force → then optimize. Show your thinking!
> 

---

### 📚 External Resources

### ✅ Videos

- [NeetCode – Two Sum Explained (YouTube)](https://www.youtube.com/watch?v=KLlXCFG5TnA)
- [freeCodeCamp – Hash Maps in JavaScript](https://www.youtube.com/watch?v=F95z5Wxd9ks)

### ✅ Articles & Practice

- [LeetCode – Two Sum](https://leetcode.com/problems/two-sum/)
- [JavaScript Map – MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [Two Sum Patterns – GeeksforGeeks](https://www.geeksforgeeks.org/two-sum-problem/)

---

### 🧩 Practice Variations (Same Pattern)

- **Two Sum II – Input array is sorted**
- **3Sum / 4Sum / kSum** problems
- **Subarray Sum Equals K**
- **Find Pair With Given Sum in BST**

---

### ✅ Summary

✔️ Mastering **Two Sum** means:

- You’ve learned how to combine arrays, hash maps, and logic flow
- You’ve unlocked a **key pattern** for many future interview questions
- You can now solve many **target-sum + complement lookup problems** in O(n)

---