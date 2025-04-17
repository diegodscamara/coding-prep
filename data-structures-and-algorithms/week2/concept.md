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

 ## Time and Space Complexity
 - Time: O(n), each character is visited at most twice (once by `right`, once by `left`).
 - Space: O(min(m, n)), where `m` is the size of the character set and `n` is the string length.

 ## Example Walkthrough
 ```js
 s = "abcabcbb"
 
 right=0: set={'a'}, maxLen=1
 right=1: set={'a','b'}, maxLen=2
 right=2: set={'a','b','c'}, maxLen=3
 right=3: s[3]='a', a in set -> remove s[left]='a', left=1, set={'b','c'}; add 'a'; maxLen=3
 ...
 ```