 # Concept: Sliding Window

 A sliding window is a dynamic range defined by two pointers (indices) that moves over a sequence (string or array). It allows us to process subarrays or substrings in linear time by expanding and contracting the window based on conditions.

 ## Approach for Longest Substring Without Repeating Characters

 1. Initialize pointers and state:
    ```js
    let left = 0;
    let maxLen = 0;
    const set = new Set();
    ```
 2. Expand the window by moving `right` from `0` to `s.length - 1`:
    ```js
    for (let right = 0; right < s.length; right++) {
      // If current char is already in set, shrink window from the left
      while (set.has(s[right])) {
        set.delete(s[left]);
        left++;
      }
      set.add(s[right]);
      maxLen = Math.max(maxLen, right - left + 1);
    }
    ```
 3. Return `maxLen`, the length of the longest window without duplicates.

 ## Pseudocode
 ```js
 function lengthOfLongestSubstring(s):
     left = 0
     maxLen = 0
     set = empty set

     for right in 0 to s.length - 1:
         while s[right] in set:
             remove s[left] from set
             left += 1
         add s[right] to set
         maxLen = max(maxLen, right - left + 1)
     return maxLen
 ```

 ## Detailed Example Walkthrough (`s = "abcabcbb"`)
 
 Initialize: `left = 0`, `maxLen = 0`, `set = {}`
 
 *   **right = 0** (`s[0] = 'a'`):
     *   `set` does not have 'a'.
     *   Add 'a' to `set`: `set = {'a'}`.
     *   `maxLen = max(0, 0 - 0 + 1) = 1`.
 *   **right = 1** (`s[1] = 'b'`):
     *   `set` does not have 'b'.
     *   Add 'b' to `set`: `set = {'a', 'b'}`.
     *   `maxLen = max(1, 1 - 0 + 1) = 2`.
 *   **right = 2** (`s[2] = 'c'`):
     *   `set` does not have 'c'.
     *   Add 'c' to `set`: `set = {'a', 'b', 'c'}`.
     *   `maxLen = max(2, 2 - 0 + 1) = 3`.
 *   **right = 3** (`s[3] = 'a'`):
     *   `set` **has** 'a'. Enter `while` loop.
     *   Delete `s[left]` ('a') from `set`: `set = {'b', 'c'}`.
     *   Increment `left`: `left = 1`.
     *   `set` does not have 'a' anymore. Exit `while` loop.
     *   Add 'a' to `set`: `set = {'b', 'c', 'a'}`.
     *   `maxLen = max(3, 3 - 1 + 1) = 3`.
 *   **right = 4** (`s[4] = 'b'`):
     *   `set` **has** 'b'. Enter `while` loop.
     *   Delete `s[left]` ('b') from `set`: `set = {'c', 'a'}`.
     *   Increment `left`: `left = 2`.
     *   `set` does not have 'b' anymore. Exit `while` loop.
     *   Add 'b' to `set`: `set = {'c', 'a', 'b'}`.
     *   `maxLen = max(3, 4 - 2 + 1) = 3`.
 *   **right = 5** (`s[5] = 'c'`):
     *   `set` **has** 'c'. Enter `while` loop.
     *   Delete `s[left]` ('c') from `set`: `set = {'a', 'b'}`.
     *   Increment `left`: `left = 3`.
     *   `set` does not have 'c' anymore. Exit `while` loop.
     *   Add 'c' to `set`: `set = {'a', 'b', 'c'}`.
     *   `maxLen = max(3, 5 - 3 + 1) = 3`.
 *   **right = 6** (`s[6] = 'b'`):
     *   `set` **has** 'b'. Enter `while` loop.
     *   Delete `s[left]` ('a') from `set`: `set = {'b', 'c'}`.
     *   Increment `left`: `left = 4`.
     *   `set` **still has** 'b'. Stay in `while` loop.
     *   Delete `s[left]` ('b') from `set`: `set = {'c'}`.
     *   Increment `left`: `left = 5`.
     *   `set` does not have 'b' anymore. Exit `while` loop.
     *   Add 'b' to `set`: `set = {'c', 'b'}`.
     *   `maxLen = max(3, 6 - 5 + 1) = 2`. (Note: `maxLen` doesn't increase here)
 
 Loop ends. Return `maxLen = 3`.
 
 ## Time and Space Complexity
 - Time: O(n), each character is visited at most twice (once by `right`, once by `left`).
 - Space: O(min(m, n)), where `m` is the size of the character set and `n` is the string length.