// LeetCode Problem: Merge Two Sorted Lists
// https://leetcode.com/problems/merge-two-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * Helper function to create a linked list from an array.
 * @param {number[]} arr
 * @returns {ListNode | null}
 */
function arrayToList(arr) {
  if (!arr || arr.length === 0) {
    return null;
  }
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

/**
 * Helper function to convert a linked list to an array.
 * @param {ListNode | null} head
 * @returns {number[]}
 */
function listToArray(head) {
  const arr = [];
  let current = head;
  while (current !== null) {
    arr.push(current.val);
    current = current.next;
  }
  return arr;
}

// ListNode class definition (assuming it might not be globally available outside LeetCode)
class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}


/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // --- Iterative Approach --- 
    // Create a dummy node to start the merged list
    const dummy = new ListNode(-1);
    let current = dummy;

    // Traverse both lists
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    // Attach the remaining part of the non-empty list
    current.next = list1 === null ? list2 : list1;

    return dummy.next;

    // --- Recursive Approach --- (Uncomment to use)
    /*
    if (!list1) {
        return list2;
    }
    if (!list2) {
        return list1;
    }

    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
    */
};

// --- Test Cases ---

// Example 1:
let list1 = arrayToList([1, 2, 4]);
let list2 = arrayToList([1, 3, 4]);
let mergedList1 = mergeTwoLists(list1, list2);
console.log("Example 1:", listToArray(mergedList1)); // Expected output: [1, 1, 2, 3, 4, 4]

// Example 2:
list1 = arrayToList([]);
list2 = arrayToList([]);
let mergedList2 = mergeTwoLists(list1, list2);
console.log("Example 2:", listToArray(mergedList2)); // Expected output: []

// Example 3:
list1 = arrayToList([]);
list2 = arrayToList([0]);
let mergedList3 = mergeTwoLists(list1, list2);
console.log("Example 3:", listToArray(mergedList3)); // Expected output: [0] 