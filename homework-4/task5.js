/*Task 5: Object Observation*/

/*Implement a function called observeObject that takes an object and a callback function as arguments. The function should return a proxy object that wraps the original object and invokes the callback function whenever any property of the object is accessed or modified.*/

function observeObject(obj, callback)
{
    return new Proxy(obj, {
        get(target, property, receiver) {
          callback(property, 'get', target[property]);
          return Reflect.get(target, property, receiver);
        },
        set(target, property, value, receiver) {
          callback(property, 'set', value);
          return Reflect.set(target, property, value, receiver);
        }
      });
}

/*Use the observeObject function to create a proxy for the person object from Task 1. The callback function should log the property name and the action (get or set) performed on the object.*/

let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    email:"john.doe@example.com",

    updateInfo(info) {
        Object.getOwnPropertyNames(info)
            .forEach(property => {
                if (Object.hasOwn(this, property) && Object.getOwnPropertyDescriptor(this, property).writable) {
                    Object.defineProperty(this, property, {value: info[property]})
                }
            })
    }
};

let observedPerson = observeObject(person, (property, action, value) => {
    console.log(`Property: ${property}, Action: ${action}, Value: ${value}`);
});

observedPerson.lastName = 'Smith';
observedPerson.age;