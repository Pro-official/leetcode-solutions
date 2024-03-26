// Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

// You may not alter the values in the list's nodes, only nodes themselves may be changed.

// Example 1:

// Input: head = [1,2,3,4,5], k = 2
// Output: [2,1,4,3,5]
// Example 2:

// Input: head = [1,2,3,4,5], k = 3
// Output: [3,2,1,4,5]

// Constraints:

// The number of nodes in the list is n.
// 1 <= k <= n <= 5000
// 0 <= Node.val <= 1000

// Follow-up: Can you solve the problem in O(1) extra memory space?

function reverseKGroup(head, k) {
  if (k <= 1 || !head || !head.next) return head; // No need to reverse if k is 1 or less

  let count = 0;
  let curr = head;

  // Count the number of nodes in the list
  while (curr) {
    count++;
    curr = curr.next;
  }

  // Check if we can reverse a group of k nodes
  if (count < k) return head;

  // Helper function to reverse a sublist
  const reverseSublist = (start, end) => {
    let prev = null;
    let current = start;
    while (current !== end) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return prev;
  };

  let dummy = new ListNode(0);
  dummy.next = head;
  let prevGroupEnd = dummy;
  let groupStart = head;

  while (count >= k) {
    let groupEnd = groupStart;
    // Move groupEnd to the end of current k-group
    for (let i = 1; i < k; i++) {
      groupEnd = groupEnd.next;
    }

    let nextGroupStart = groupEnd.next; // Next k-group starting point
    groupEnd.next = null; // Unlink current k-group from next

    // Reverse the current k-group
    prevGroupEnd.next = reverseSublist(groupStart, groupEnd);

    // Connect the reversed k-group with the rest of the list
    groupStart.next = nextGroupStart;

    // Update pointers for the next iteration
    prevGroupEnd = groupStart;
    groupStart = nextGroupStart;

    // Update count
    count -= k;
  }

  return dummy.next;
}

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// Example usage:
const head1 = new ListNode(1);
head1.next = new ListNode(2);
head1.next.next = new ListNode(3);
head1.next.next.next = new ListNode(4);
head1.next.next.next.next = new ListNode(5);

console.log(reverseKGroup(head1, 2)); // Output: [2,1,4,3,5]

const head2 = new ListNode(1);
head2.next = new ListNode(2);
head2.next.next = new ListNode(3);
head2.next.next.next = new ListNode(4);
head2.next.next.next.next = new ListNode(5);

console.log(reverseKGroup(head2, 3)); // Output: [3,2,1,4,5]
