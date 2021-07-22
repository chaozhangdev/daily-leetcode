/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
const isSubtree = (root, subRoot) => {
  if (!root) return !subRoot;
  return (
    isEqual(root, subRoot) ||
    isSubtree(root.left, subRoot) ||
    isSubtree(root.right, subRoot)
  );
};

const isEqual = (node1, node2) => {
  if (!node1 || !node2) return !node1 && !node2;
  if (node1.val !== node2.val) {
    return false;
  } else {
    return isEqual(node1.left, node2.left) && isEqual(node1.right, node2.right);
  }
};
