/*Task 1: Object Property Manipulation*/

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

/*Use property descriptors to make all properties of the person object read-only and non-writable, so their values cannot be changed directly.*/
const properties = Object.keys(person);

properties.forEach((property) => {
    Object.defineProperty(person, property, {
        writable: false,
    });
});

/*Create a new property called address on the person object with an initial value of an empty object. Make this property non-enumerable and non-configurable.*/
Object.defineProperty(person, 'address', {
    value:{},
    writable: true,
    enumerable: false,
    configurable: false,
})

console.log(Object.getOwnPropertyDescriptors(person));

person.updateInfo({'address': 'New York, USA'});
console.log(person.address);