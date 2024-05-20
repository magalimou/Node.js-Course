
class Node {
    constructor(item) {
        this.item = item;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    #root;

    constructor() {
        this.#root = null;
    }

    insert(item) {
        const newNode = new Node(item);

        if (this.#root === null) {
            this.#root = newNode;
        } else {
            this.insertNode(this.#root, newNode);
        }
    }

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

    search(item) {
        return this.searchNode(this.#root, item);
    }

    searchNode(node, item) {
        if(node === null) {
            return null;
        } else if(item < node.item) {
            return this.searchNode(node.left, item);
        } else if(item > node.item) {
            return this.searchNode(node.right, item);
        } else {
            return node;
        }
    }

    preOrder(){
        return this.preOrderNode(this.#root);
    }

    preOrderNode(node){
        if(node !== null){
            console.log(node.item);
            this.preOrderNode(node.left);
            this.preOrderNode(node.right);
        }
    }

    inOrder(){
        return this.inOrderNode(this.#root);
    }

    inOrderNode(node){
        if(node !== null){
            this.inOrderNode(node.left);
            console.log(node.item);
            this.inOrderNode(node.right);
        }
    }

    postOrder(){
        return this.postOrderNode(this.#root);
    }

    postOrderNode(node){
        if(node !== null){
            this.postOrderNode(node.left);
            this.postOrderNode(node.right);
            console.log(node.item);
        }
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