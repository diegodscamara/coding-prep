 # JS Grammar: Pointers, Set, slice, indexOf

 In Week 2, we'll use several JavaScript features to implement the sliding window technique:

 1. Pointers (left and right)
    - Use two indices to define the current window: `let left = 0;` and advance `right` in a loop.
    - Example:
      ```js
      for (let right = 0; right < s.length; right++) {
        // adjust left pointer as needed
      }
      ```

 2. Set
    - Create a set of characters for O(1) lookups: `const set = new Set();`
    - Methods: `set.has(value)`, `set.add(value)`, `set.delete(value)`
    - Example:
      ```js
      const set = new Set();
      set.add('a');
      console.log(set.has('a')); // true
      set.delete('a');
      ```

 3. slice
    - Extract a substring: `str.slice(start, end)` returns `str[start]` up to `str[end-1]`.
    - Useful for retrieving the current window contents.
    - Example:
      ```js
      const str = 'hello';
      console.log(str.slice(1, 4)); // 'ell'
      ```

 4. indexOf
    - Find the first occurrence of a character: `str.indexOf(char, fromIndex)`.
    - Returns the index >= `fromIndex` or `-1` if not found.
    - Example:
      ```js
      const str = 'abcabcbb';
      console.log(str.indexOf('b', 2)); // 4
      ```