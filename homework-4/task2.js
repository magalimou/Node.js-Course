/*Task 2: Object Property Enumeration and Deletion*/
let object = {
    name: "Laptop",
    price: 1000,
    quantity: 5
}

/*Use property descriptors to make the price and quantity properties non-enumerable and non-writable.*/
Object.defineProperties(object, {
    price: {
        writable: false,
        enumerable: false,
    },
    quantity: {
        writable: false,
        enumerable: false,
    }
});

/*Implement a function called getTotalPrice that takes the product object as an argument and returns the total price (calculated as price * quantity). Ensure that the function accesses the non-enumerable properties directly using the Object.getOwnPropertyDescriptor method.*/

function getTotalPrice(obj) {
    let price = Object.getOwnPropertyDescriptor(obj, 'price').value;
    let quantity = Object.getOwnPropertyDescriptor(obj, 'quantity').value;
    return price * quantity;
}

console.log(getTotalPrice(object));

/*Implement a function called deleteNonConfigurable that takes an object and a property name as arguments. The function should delete the specified property from the object if it exists. If the property is non-configurable, throw an error with an appropriate message.*/
function deleteNonConfigurable(obj, property){
    if(Object.getOwnPropertyDescriptor(obj, property).configurable){
        delete obj[property];
    }else{
        throw new Error("Property is non-configurable");
    }
}

deleteNonConfigurable(object, 'price');
console.log(object);

Object.defineProperty(object, 'name', {
    configurable: false});
    
deleteNonConfigurable(object, 'name'); // throws an error