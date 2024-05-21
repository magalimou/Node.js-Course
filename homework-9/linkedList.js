class Node {
    constructor(value) {
        this.value = value; 
        this.next = null;   
    }
}

class LinkedList {
    #head;
    #tail;
    #length;

    constructor() {
        this.#head = null; 
        this.#tail = null; 
        this.#length = 0;   
    }

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