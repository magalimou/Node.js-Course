/**Task 6: Object Deep Cloning**/

/*Implement a function called deepCloneObject that takes an object as an argument and returns a deep copy of the object. The function should handle circular references and complex nested structures. Do not use JSON methods.*/

function deepCloneObject(obj, map = new WeakMap()) {

    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    if (map.has(obj)) {
        return map.get(obj);
    }

    let clone = Array.isArray(obj) ? [] : Object.create(Object.getPrototypeOf(obj));

    map.set(obj, clone);
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            clone[key] = deepCloneObject(obj[key], map);
        }
    }
    return clone;
}

let obj = {
    a: 1,
    b: {
        c: 2
    }
};

let obj2 = deepCloneObject(obj);
console.log(obj2); // { a: 1, b: { c: 2 } }