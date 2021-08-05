/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const addTwoNumbers = (l1, l2) => {
  const helper = (l1, l2, carry) => {
    if (!l1 && !l2 && carry === 0) return null;
    let val1 = !l1 ? 0 : l1.val;
    let val2 = !l2 ? 0 : l2.val;
    let val = val1 + val2 + carry;
    let newCarry = val > 9 ? Math.floor(val / 10) : 0;
    return {
      val: val % 10,
      next: helper(l1 && l1.next, l2 && l2.next, newCarry),
    };
  };
  return helper(l1, l2, 0);
};
