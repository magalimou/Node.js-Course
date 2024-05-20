class Queue {
    #elements;
    #last;
    #first;

    constructor() {
        this.#elements = [];
        this.#last = -1;
        this.#first = 0;
    }

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

    dequeue(){
        if(this.#last === -1){
            return null;
        }
        this.#first = this.#elements[1];
        return this.#elements.shift();
    }

    peek(){
        if(this.isEmpty()){
            return null;
        }else{
            return this.#first;
        }
    }

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


  