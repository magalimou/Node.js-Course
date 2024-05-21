
/**
 * Class to represent a node in a binary tree.
 */
class Node {
    /**
     * Creates a new node with the given item.
     * @param {*} item - The item stored in the node.
     */
    constructor(item) {
        this.item = item;
        this.left = null;
        this.right = null;
    }
}

/**
 * Class to represent a binary search tree (BST).
 */
class BinaryTree {
    #root; // Pointer to the root node of the tree

    /**
     * Creates a new empty binary tree.
     */
    constructor() {
        this.#root = null;
    }

    /**
     * Inserts a new item into the binary tree.
     * @param {*} item - The item to insert.
     */
    insert(item) {
        const newNode = new Node(item);

        if (this.#root === null) {
            this.#root = newNode;
        } else {
            this.insertNode(this.#root, newNode);
        }
    }

    /**
     * Inserts a new node into the binary tree recursively.
     * @param {Node} node - The current node being examined.
     * @param {Node} newNode - The new node to insert.
     */
    insertNode(node, newNode) {
        if(newNode.item < node.item) {
            if(node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        }else{
            if(node.right === null) {
                node.right = newNode;
            } else{
                this.insertNode(node.right, newNode);
            }
        }
    }

    /**
     * Searches for an item in the binary tree.
     * @param {*} item - The item to search for.
     * @returns {Node|null} - The node containing the item, or null if not found.
     */
    search(item) {
        return this.#searchNode(this.#root, item);
    }

    #searchNode(node, item) {
        if(node === null) {
            return null;
        } else if(item < node.item) {
            return this.#searchNode(node.left, item);
        } else if(item > node.item) {
            return this.#searchNode(node.right, item);
        } else {
            return node;
        }
    }

    /**
     * Performs a pre-order traversal of the binary tree.
     * @returns {Array} - An array containing the items visited during the traversal.
     */
    preOrder(){
        return this.#preOrderNode(this.#root);
    }

    #preOrderNode(node){
        if(node !== null){
            console.log(node.item);
            this.#preOrderNode(node.left);
            this.#preOrderNode(node.right);
        }
    }

    /**
     * Performs an in-order traversal of the binary tree.
     * @returns {Array} - An array containing the items visited during the traversal.
     */
    inOrder(){
        return this.#inOrderNode(this.#root);
    }

    #inOrderNode(node){
        if(node !== null){
            this.#inOrderNode(node.left);
            console.log(node.item);
            this.#inOrderNode(node.right);
        }
    }

     /**
     * Performs a post-order traversal of the binary tree.
     * @returns {Array} - An array containing the items visited during the traversal.
     */
    postOrder(){
        return this.#postOrderNode(this.#root);
    }

    #postOrderNode(node){
        if(node !== null){
            this.#postOrderNode(node.left);
            this.#postOrderNode(node.right);
            console.log(node.item);
        }
    }

    /**
     * Checks if the binary tree satisfies the Binary Search Tree (BST) property.
     * @returns {boolean} - True if the tree is a valid BST, otherwise false.
     */
    isBST() {
        return this.isBSTUtil(this.#root, -Infinity, Infinity);
    }  

    /**
     * Utility function to recursively check if a subtree is a valid BST.
     * @param {Node} node - The root node of the subtree.
     * @param {number} min - The minimum allowed value in the subtree.
     * @param {number} max - The maximum allowed value in the subtree.
     * @returns {boolean} - True if the subtree is a valid BST, otherwise false.
     */
    isBSTUtil(node, min, max) {

        if (node === null) {
            return true;
        }
    
        if (node.item <= min || node.item >= max) {
            return false;
        }

        return this.isBSTUtil(node.left, min, node.item) && this.isBSTUtil(node.right, node.item, max);
    }
}

// Usage
const binaryTree = new BinaryTree();
binaryTree.insert(11);
binaryTree.insert(7);
binaryTree.insert(15);
binaryTree.insert(5);
binaryTree.insert(3);
binaryTree.insert(9);

console.log(binaryTree.search(5));

binaryTree.preOrder();
binaryTree.inOrder();
binaryTree.postOrder();

console.log(binaryTree.isBST());