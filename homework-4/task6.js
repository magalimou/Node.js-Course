/**Task 6: Object Deep Cloning**/

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
        c: 2,
        d: [3, 4, 5]
    }
};

let obj2 = deepCloneObject(obj);
console.log(obj2); 