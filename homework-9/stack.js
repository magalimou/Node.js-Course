class Stack {
    #elements;
    #top;

    constructor() {
        this.#elements = [];
        this.#top = -1;
    }

    push(element){
        this.#elements.push(element);
        this.#top++;
    }

    pop(){
        if(this.#top === -1){
            return null;
        }
        this.#top--;
        return this.#elements.pop();
    }

    peek(){
        if(this.#top === -1){
            return null;
        }
        return this.#elements[this.#top];
    }

    isEmpty(){
        return this.#top === -1;
    }

    size(){
        return this.#elements.length;
    }
}


class MinMaxStack {
	#stack;
	#minStack;
	#maxStack;

    constructor() {
        this.#stack = new Stack();
        this.#minStack = new Stack();
        this.#maxStack = new Stack();
    }
    
    push(element){
        this.#stack.push(element);
        if(this.#minStack.isEmpty() || element <= this.#minStack.peek()){
            this.#minStack.push(element);
        }
        if(this.#maxStack.isEmpty() || element >= this.#maxStack.peek()){
            this.#maxStack.push(element);
        }
    }

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

    getMin(){
        return this.#minStack.peek();
    }

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

  