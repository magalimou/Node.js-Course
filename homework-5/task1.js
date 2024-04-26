/*Task 1: Advanced Array Filtering*/

function customFilterUnique(arr, callback) {
   let unique = [];
   for(let i of arr){
      if(callback(i)){
         if(!unique.includes(i)){
            unique.push(i);
         }
      }
   }
   return unique;
}

// Example
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const callback = (item) => item % 2 === 0;
let result = customFilterUnique(arr, callback);
console.log(result);

/*Use the customFilterUnique function to filter an array of objects based on a specific property and return only unique objects.*/

let array2 = [{name: 'John', age: 25}, {name: 'Jane', age: 30}, {name: 'Anne', age: 25}, {name: 'Frank', age: 26}];
const callback2 = (item) => item.age === 25;

console.log(customFilterUnique(array2, callback2)); 