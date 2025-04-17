# Concept: Merge Two Sorted Lists

Merging two sorted linked lists involves creating a new sorted list that incorporates all nodes from the two input lists while maintaining sorted order.

## Approaches

Two primary methods are common:

### 1. Iterative Approach (Using Pointers)

*   **Initialization:**
    *   Create a `dummy` node to serve as the starting point of the merged list (simplifies edge cases).
    *   Initialize a `current` pointer to the `dummy` node. This pointer will track the end of the merged list as it's built.
    *   Use pointers (`p1`, `p2`) to track the current nodes in `list1` and `list2` respectively.
*   **Iteration:**
    *   While both `p1` and `p2` are not `null`:
        *   Compare `p1.val` and `p2.val`.
        *   Append the node with the smaller value to `current.next`.
        *   Advance the pointer (`p1` or `p2`) of the list from which the node was taken.
        *   Move the `current` pointer forward (`current = current.next`).
*   **Cleanup:**
    *   Once one list is exhausted (either `p1` or `p2` is `null`), append the remaining portion of the other list to `current.next`.
*   **Return:** Return `dummy.next`, which is the head of the newly merged sorted list.

### 2. Recursive Approach

*   **Base Cases:**
    *   If `list1` is `null`, there's nothing left to merge from it, so return `list2`.
    *   If `list2` is `null`, return `list1`.
*   **Recursive Step:**
    *   Compare the values at the current heads: `list1.val` and `list2.val`.
    *   **If `list1.val <= list2.val`:**
        *   The smaller node is `list1`. Keep `list1` as the current head.
        *   Recursively call `mergeTwoLists` with `list1.next` and `list2`.
        *   Set `list1.next` to the result of the recursive call (linking the rest of the merged list).
        *   Return `list1`.
    *   **Else (`list2.val < list1.val`):**
        *   The smaller node is `list2`. Keep `list2` as the current head.
        *   Recursively call `mergeTwoLists` with `list1` and `list2.next`.
        *   Set `list2.next` to the result of the recursive call.
        *   Return `list2`.

## Pseudocode (Recursive Approach)

```js
function mergeTwoLists(list1, list2):
    // Base cases
    if list1 is null:
        return list2
    if list2 is null:
        return list1

    // Recursive step
    if list1.val <= list2.val:
        // Link list1 node, then recursively merge the rest
        list1.next = mergeTwoLists(list1.next, list2)
        return list1
    else:
        // Link list2 node, then recursively merge the rest
        list2.next = mergeTwoLists(list1, list2.next)
        return list2
```

## Time and Space Complexity

Let `n` be the number of nodes in `list1` and `m` be the number of nodes in `list2`.

*   **Iterative Approach:**
    *   **Time Complexity:** O(n + m)
        *   We must visit every node in both lists exactly once.
    *   **Space Complexity:** O(1)
        *   We only use a constant amount of extra space for pointers (`dummy`, `current`, `p1`, `p2`).

*   **Recursive Approach:**
    *   **Time Complexity:** O(n + m)
        *   Each node from both lists results in one recursive call.
    *   **Space Complexity:** O(n + m)
        *   The space is dominated by the recursion call stack. In the worst case (e.g., one list is very long, the other short), the depth of the recursion can be up to `n + m`. 