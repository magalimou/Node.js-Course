/**
 * Class to represent a node in a linked list.
 */
class Node {
    /**
     * Creates a new node with the given value.
     * @param {*} value - The value of the node.
     */
    constructor(value) {
        this.value = value; 
        this.next = null;   
    }
}

/**
 * Class to represent a singly linked list.
 */
class LinkedList {
    #head; // Pointer to the first node in the list
    #tail;  // Pointer to the last node in the list
    #length;

    /**
     * Creates a new empty linked list.
     */
    constructor() {
        this.#head = null; 
        this.#tail = null; 
        this.#length = 0;   
    }

    /**
     * Inserts a new node with the given value at the end of the list.
     * @param {*} value - The value of the new node.
     */
    insert(value) {
        const newNode = new Node(value);

        if (!this.#head) {
            this.#head = newNode;
            this.#tail = newNode;
        } else {
            this.#tail.next = newNode;
            this.#tail = newNode;
        }

        this.#length++;
    }

    /**
     * Deletes the first occurrence of a node with the given value from the list.
     * @param {*} value - The value of the node to delete.
     * @returns {boolean} - Returns true if a node was deleted, otherwise false.
     */
    delete(value) {
        let currentNode = this.#head;
        let previousNode = null;

        while (currentNode) {
            if (currentNode.value === value) {
                if (previousNode) {
                    previousNode.next = currentNode.next;

                    if (!currentNode.next) {
                        this.#tail = previousNode;
                    }
                } else {
                    this.#head = currentNode.next;

                    if (!currentNode.next) {
                        this.#tail = null;
                    }
                }

                this.#length--;
                return true;
            }

            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        return false;
    }

    /**
     * Searches for the first occurrence of a node with the given value in the list.
     * @param {*} value - The value to search for.
     * @returns {Node|null} - Returns the node if found, otherwise null.
     */
    search(value) {
        let currentNode = this.#head;

        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode;
            }

            currentNode = currentNode.next;
        }

        return null;
    }

     /**
     * Applies Floyd's Cycle Detection Algorithm to check if the list contains a cycle.
     * @returns {boolean} - Returns true if a cycle is detected, otherwise false.
     */
    floydAlgorithm() {
        let tortoise = this.#head;
        let hare = this.#head.next.next;
        let result = false;

        if(this.#length === 0) {
            result = false;
        }

        while(hare && hare.next && result === false) {
            if(hare === tortoise) {
                result = true;
            }

            tortoise = tortoise.next;
            hare = hare.next.next;
        }
        return result;
      
    }

    /**
     * Returns the tail node of the list.
     * @returns {Node|null} - Returns the tail node if it exists, otherwise null.
     */
    get tail() {
        return this.#tail;
    }
}

//Usage
const linkedList = new LinkedList();
linkedList.insert(1);
linkedList.insert(2);
linkedList.insert(3);
linkedList.insert(4);
linkedList.insert(5);

console.log(linkedList.search(3));
linkedList.delete(3);
console.log(linkedList.search(3));

console.log(linkedList.floydAlgorithm()); 

linkedList.tail.next = linkedList.search(2);

console.log(linkedList.floydAlgorithm()); 
