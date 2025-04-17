# JS Grammar: `class`, `this`, `next`, Recursion in JS

For merging sorted linked lists in Week 3, we'll focus on these JavaScript concepts:

1.  **`class` Keyword:**
    *   Used to define blueprints for objects. For linked lists, we define a `ListNode` class.
    *   Contains a `constructor` for initializing new nodes and properties like `val` and `next`.
    *   Example:
        ```js
        class ListNode {
          constructor(val, next = null) {
            this.val = val; // The value stored in the node
            this.next = next; // Pointer to the next node in the list
          }
        }
        ```

2.  **`this` Keyword:**
    *   Inside a class constructor or method, `this` refers to the instance of the class being created or acted upon.
    *   Used to access or assign properties of the specific node instance (e.g., `this.val`, `this.next`).
    *   Example (within the `ListNode` class):
        ```js
        this.val = val; // Assigns the passed value to the instance's 'val' property
        ```

3.  **`.next` Property:**
    *   A crucial property within our `ListNode` class that holds a reference (pointer) to the subsequent node in the sequence.
    *   If it's the last node in the list, `next` is typically `null`.
    *   Example:
        ```js
        const node1 = new ListNode(1);
        const node2 = new ListNode(2);
        node1.next = node2; // node1 now points to node2
        console.log(node1.next.val); // Output: 2
        ```

4.  **Recursion:**
    *   A function calling itself to solve smaller instances of the same problem.
    *   Requires a **base case** to stop the recursion (e.g., when one list is empty).
    *   The **recursive step** breaks the problem down (e.g., choosing the smaller node and recursively merging the rest).
    *   Example (conceptual merge step):
        ```js
        function mergeTwoLists(list1, list2) {
          // Base cases
          if (!list1) return list2;
          if (!list2) return list1;

          // Recursive step
          if (list1.val < list2.val) {
            list1.next = mergeTwoLists(list1.next, list2); // Recurse with the rest of list1
            return list1;
          } else {
            list2.next = mergeTwoLists(list1, list2.next); // Recurse with the rest of list2
            return list2;
          }
        }
        ```
