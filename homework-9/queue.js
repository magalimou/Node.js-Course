/**
 * Class to represent a queue using an underlying array.
 */
class Queue {
    #elements;
    #last;
    #first;

    /**
     * Creates a new empty queue.
     */
    constructor() {
        this.#elements = [];
        this.#last = -1;
        this.#first = 0;
    }

     /**
     * Adds an element to the back of the queue.
     * @param {*} element - The element to add.
     */
    enqueue(element){
        if(this.#last === -1){
            this.#elements.push(element);
            this.#last = element;
            this.#first = element;
        }else{
            this.#elements.push(element);
            this.#last = element;
        }
    }

    /**
     * Removes and returns the element from the front of the queue.
     * @returns {*} - The removed element or null if the queue is empty.
     */
    dequeue(){
        if(this.#last === -1){
            return null;
        }
        this.#first = this.#elements[1];
        return this.#elements.shift();
    }

    /**
     * Returns the element at the front of the queue without removing it.
     * @returns {*} - The front element of the queue or null if the queue is empty.
     */
    peek(){
        if(this.isEmpty()){
            return null;
        }else{
            return this.#first;
        }
    }

    /**
     * Checks if the queue is empty.
     * @returns {boolean} - Returns true if the queue is empty, otherwise false.
     */
    isEmpty(){
        return this.#last === -1;
    }
}

// Usage
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.peek());
queue.dequeue();
console.log(queue.peek());
console.log(queue.isEmpty());


  