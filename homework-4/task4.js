/*Task 4: Advanced Property Descriptors*/

/*Implement a function called createImmutableObject that takes an object as an argument and returns a new object with all its properties made read-only and non-writable using property descriptors. The function should handle nested objects and arrays recursively.*/

function createImmutableObject(obj){
    for(let key in obj){
        if(typeof obj[key] === 'object'){
            createImmutableObject(obj[key]);
        }
        Object.defineProperty(obj, key, {
            writable: false,
            configurable: false
        });
    }
    return obj;
}

/*use the createImmutableObject function to create an immutable version of the person object from Task 1.*/
let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    email:"john.doe@example.com",
    address: {
        city: 'New York',
        country: 'USA'
    },
}

console.log(Object.getOwnPropertyDescriptors(person));

let immutable = createImmutableObject(person);
console.log(Object.getOwnPropertyDescriptors(immutable));