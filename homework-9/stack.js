/**
 * Class to represent a stack using an underlying array.
 */
class Stack {
    #elements;
    #top;

     /**
     * Creates a new empty stack.
     */
    constructor() {
        this.#elements = []; // Array to store the stack elements
        this.#top = -1; // Index of the top element of the stack
    }

    /**
     * Adds an element to the top of the stack.
     * @param {*} element - The element to add.
     */
    push(element){
        this.#elements.push(element);
        this.#top++;
    }

     /**
     * Removes and returns the element from the top of the stack.
     * @returns {*} - The removed element or null if the stack is empty.
     */
    pop(){
        if(this.#top === -1){
            return null;
        }
        this.#top--;
        return this.#elements.pop();
    }

     /**
     * Returns the element at the top of the stack without removing it.
     * @returns {*} - The top element of the stack or null if the stack is empty.
     */
    peek(){
        if(this.#top === -1){
            return null;
        }
        return this.#elements[this.#top];
    }

    /**
     * Checks if the stack is empty.
     * @returns {boolean} - Returns true if the stack is empty, otherwise false.
     */
    isEmpty(){
        return this.#top === -1;
    }

      /**
     * Returns the size of the stack.
     * @returns {number} - The number of elements in the stack.
     */
    size(){
        return this.#elements.length;
    }
}

/**
 * Class to represent a stack that also tracks the minimum and maximum values.
 */
class MinMaxStack {
	#stack;
	#minStack;
	#maxStack;

    /**
     * Creates a new empty stack that tracks the minimum and maximum values.
     */
    constructor() {
        this.#stack = new Stack();
        this.#minStack = new Stack();
        this.#maxStack = new Stack();
    }
    
    /**
     * Adds an element to the stack and updates the stacks for minimum and maximum values.
     * @param {*} element - The element to add.
     */
    push(element){
        this.#stack.push(element);
        if(this.#minStack.isEmpty() || element <= this.#minStack.peek()){
            this.#minStack.push(element);
        }
        if(this.#maxStack.isEmpty() || element >= this.#maxStack.peek()){
            this.#maxStack.push(element);
        }
    }

    /**
     * Removes and returns the element from the top of the stack and updates the stacks for minimum and maximum values.
     * @returns {*} - The removed element or null if the stack is empty.
     */
    pop(){
        const element = this.#stack.pop();
        if(element === this.#minStack.peek()){
            this.#minStack.pop();
        }
        if(element === this.#maxStack.peek()){
            this.#maxStack.pop();
        }
        return element;
    }

     /**
     * Returns the current minimum value in the stack.
     * @returns {*} - The minimum value or null if the stack is empty.
     */
    getMin(){
        return this.#minStack.peek();
    }

    /**
     * Returns the current maximum value in the stack.
     * @returns {*} - The maximum value or null if the stack is empty.
     */
    getMax(){
        return this.#maxStack.peek();
    }
}

// Usage
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek()); 
stack.pop();
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.size());

// Usage for MinMaxStack
const minMaxStack = new MinMaxStack();
minMaxStack.push(5);
minMaxStack.push(2);
minMaxStack.push(7);
minMaxStack.push(3);

console.log(minMaxStack.getMin());
console.log(minMaxStack.getMax());

minMaxStack.pop();
console.log(minMaxStack.getMin());
console.log(minMaxStack.getMax());

  