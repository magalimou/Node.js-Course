class CustomHashTable {
    #table;
    #size;

    constructor() {
        this.#table = new Array(127);
        this.#size = 0;
    }
  
    #hash(key) {
       let hash = 0;
       for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.#table.length;
    }
  
    insert(key, value) {
      const index = this.#hash(key);
      if(this.#table[index]) {
        for(let i = 0; i < this.#table[index].length; i++) {
          if(this.#table[index][i][0] === key) {
            this.#table[index][i][1] = value;
            return;
          }
        }
        //not found, add new key-value pair
        this.#table[index].push([key, value]);
      }else{
        this.#table[index] = [];
        this.#table[index].push([key, value]);
      }
      this.#size++;
    }
  
    get(key) {
      const index = this.#hash(key);
      if(this.#table[index]){
        for(let i = 0; i < this.#table.length; i++) {
          if(this.#table[index][i][0] === key) {
            return this.#table[index][i][1];
          }
        }
      }
      return undefined;
    }
  
    delete(key) {
      const index = this.#hash(key);
      if(this.#table[index] && this.#table[index].length ) {
        for(let i = 0; i < this.#table[index].length; i++) {
          if(this.#table[index][i][0] === key) {
            this.#table[index].splice(i, 1);
            this.#size--;
            return true;
          }
        }
      }else{
        return false;
      }
    }

    display() {
      this.#table.forEach((values, index) => {
        const chainedValues = values.map(
          ([key, value]) => `[ ${key}: ${value} ]`
        );
        console.log(`${index}: ${chainedValues}`);
      });
    }
  }
  
  // Create an instance of CustomHashTable and demonstrate its usage...
  const ht = new CustomHashTable();
  ht.insert("Canada", 300);
  ht.insert("France", 100);
  ht.insert("Spain", 110);
  ht.insert("ǻ", 192);

  console.log(ht.get("Canada"));
  console.log(ht.get("France"));
  console.log(ht.get("Spain"));

  console.log(ht.delete("Canada"));
  console.log(ht.get("Canada"));

  ht.display();

  console.log(ht.delete("Spain"));
