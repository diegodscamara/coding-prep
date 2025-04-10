# 🧠 Two Sum in JavaScript: Mastering Hash Maps & Pattern Thinking

## 🎯 Learning Outcomes

By the end of this guide, you will:

- Understand and implement the **two-pass hash map pattern**
- Use **code grammar tools** like early return, complement logic, and `Map` lookup
- Apply **pattern-based thinking** for interview questions
- Write clean, testable, and understandable **vanilla JavaScript**

---

## 📝 Problem Summary

**Task**:  
Return indices of two numbers in an array that sum to a given target.

```js
/**
 * @param {number[]} nums - Array of integers
 * @param {number} target - Target sum
 * @returns {[number, number]} Indices of the two numbers
 * @throws {Error} If no valid solution exists
 */
```

---

## 🔍 Final Solution: Two-Pass Hash Map

```js
function twoSum(nums, target) {
  const map = new Map();

  // First pass: store all numbers with their indices
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }

  // Second pass: check for complements
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement) && map.get(complement) !== i) {
      return [i, map.get(complement)];
    }
  }

  throw new Error("No solution exists");
}
```

---

## 🔤 Code Grammar Tools

### 🧩 Complement Pattern
```js
const complement = target - current;
```

### 🔎 Map Lookup Pattern
```js
map.has(value) && map.get(value) !== currentIndex;
```

### 🚪 Early Return
```js
if (condition) return result;
```

### 💥 Error Guard
```js
throw new Error("No solution exists");
```

---

## 💡 Why This Works (Pattern Thinking)

1. **Store every number with its index**  
2. **Loop again to find complement (target - number)**  
3. **Ensure indices are not the same**

---

## 🧪 Test Cases

```js
const testCases = [
  { nums: [2, 7, 11, 15], target: 9, expected: [0, 1] },
  { nums: [3, 3], target: 6, expected: [0, 1] },
  { nums: [-1, -2, -3, -4], target: -7, expected: [2, 3] },
  { nums: [1, 5, 3, 2, 8], target: 7, expected: [1, 3] }
];

function runTests(fn) {
  testCases.forEach(({ nums, target, expected }, index) => {
    try {
      const result = fn(nums, target);
      const pass = JSON.stringify(result) === JSON.stringify(expected);
      console.log(`Test ${index + 1}: ${pass ? '✅' : '❌'} Result: [${result}]`);
    } catch (e) {
      console.log(`Test ${index + 1}: ❌ Error - ${e.message}`);
    }
  });
}

runTests(twoSum);
```

---

## ⚙️ Time & Space Complexity

| Aspect         | Value    |
|----------------|----------|
| Time (2 loops) | O(n)     |
| Space (Map)    | O(n)     |

✅ Efficient for large inputs  
⚠️ Uses extra memory for the map

---

## 🧠 Reusable Use Cases

Use this **two-pass map pattern** when:

- You must preserve the original indices
- You can afford two iterations for clarity
- Input is unsorted and contains duplicates

---

## ✨ Related Challenges

- **Two Sum II** – Input is sorted → use two pointers (O(n) time, O(1) space)
- **3Sum** – Fix one number, apply Two Sum on the rest
- **Subarray Sum Equals K** – Use prefix sums with a map

---

## ✅ Final Review Checklist

- [x] Used hash map correctly  
- [x] Avoided using the same index twice  
- [x] Code is clean, early-return friendly  
- [x] Tests pass  
- [x] Explained logic using simple patterns  

---

## 🔗 Resources

- [MDN – Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)  
- [LeetCode – Two Sum](https://leetcode.com/problems/two-sum/)  
- [NeetCode – Two Sum Explainer](https://www.youtube.com/watch?v=KLlXCFG5TnA)