class CustomHashTable {
    #table;
    #size;

     /**
     * Constructor for CustomHashTable.
     * Initializes the hash table with a fixed size and sets the initial count of elements to 0.
     */
    constructor() {
        this.#table = new Array(127);
        this.#size = 0;
    }
  
    /**
     * Private method to generate a hash for a given key.
     * @param {string} key - The key to be hashed.
     * @returns {number} - The hash value which is the index in the table.
     * 
     * Performance Analysis:
     * Time Complexity: O(n), where n is the length of the key.
     *
     * Trade-offs:
     * - Simplicity vs. Distribution: The hash function is simple to implement and understand, but it may not distribute keys evenly across the hash table for certain types of input data.
     * - Fixed Table Size: The hash table has a fixed size of 127, which can lead to a higher load factor and potentially increase the number of collisions, degrading performance.
     */
    #hash(key) {
       let hash = 0;
       for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.#table.length;
    }
  
     /**
     * Inserts a key-value pair into the hash table.
     * If the key already exists, its value is updated.
     * @param {string} key - The key associated with the value.
     * @param {*} value - The value to be stored.
     * 
     * * Time Complexity: O(1) on average, O(n) in the worst case.
     * - Worst Case: If many keys hash to the same index (high collision), the time to check for an existing key becomes O(k), where k is the number of elements in the bucket.
     */
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
  
     /**
     * Retrieves the value associated with the given key.
     * @param {string} key - The key whose value needs to be retrieved.
     * @returns {*} - The value associated with the key, or undefined if the key is not found.
     * 
     *  Time Complexity: O(1) on average, O(n) in the worst case.
     */
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
  
     /**
     * Deletes a key-value pair from the hash table.
     * @param {string} key - The key to be deleted.
     * @returns {boolean} - True if the key was found and deleted, false otherwise.
     * 
     * Time Complexity: O(1) on average, O(n) in the worst case.
     * - Average Case: Deleting a key-value pair involves computing the hash index and removing the pair from the bucket, which is O(1) on average.
     */
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

    /**
     * Displays the entire hash table.
     * Logs each bucket and its key-value pairs to the console.
     */
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
