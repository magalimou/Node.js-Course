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


  