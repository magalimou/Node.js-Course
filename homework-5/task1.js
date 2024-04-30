/*Task 1: Advanced Array Filtering*/

function customFilterUnique(arr, callback) {
   let result = [];
   let unique = new Set();
   for(let i of arr){
      if(callback(i)){
         let objString = JSON.stringify(i);
         if(!unique.has(objString)){
            unique.add(objString);
            result.push(i);
         }
      }
   }
   return result;
}

// Example 1
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const callback = (item) => item % 2 === 0;
let result = customFilterUnique(arr, callback);
console.log(result);

//Example 2
let array2 = [{name: 'John', age: 25}, {name: 'Jane', age: 30}, {name: 'Anne', age: 25}, {name: 'Frank', age: 26}];
const callback2 = (item) => item.age === 25;

console.log(customFilterUnique(array2, callback2));

//Example 3
let arrayOfObjects = [
   { a: 1, b: 2 },
   { a: 1, b: 2 },
   { c: 3, d: 4 },
   { a: 5, b: 6 },
   { e: 7, f: 8 },
   { g: 9, h: 0 }
 ];
 
 const filterByPropertyA = (obj) => {
   if (!obj || typeof obj !== "object") throw new Error("pass an object as parameter")
   return Object.keys(obj).includes("a") ? obj : undefined
 }
 
 console.log(customFilterUnique(arrayOfObjects, filterByPropertyA))