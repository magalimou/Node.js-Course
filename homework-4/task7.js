/**Task 7: Object Property Validation**/

function validateObject(obj, schema){

    for(let key in schema)
    {
        if(schema[key].required && !obj.hasOwnProperty(key))
        {
            return false;
        }
        if(typeof obj[key] !== schema[key].type)
        {
            return false;
        }
    }
    return true;
}

let schema = {
    name: {
        type: 'string',
        required: true
    },
    age: {
        type: 'number',
        required: true
    },
}

let obj = {
    name: 'Julia',
    age: 35,
}

console.log(validateObject(obj, schema)); 

let obj2 = {
    name: 4,
    age: 'julia',
}

console.log(validateObject(obj2, schema));

let obj3 = {
    country: 'USA',
    city: 'New York',
}

console.log(validateObject(obj3, schema));


