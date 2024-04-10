function addValues(value1, value2) {
    if ((typeof value1 === 'number' || typeof value1 === 'string' || typeof value1 ==='boolean' || typeof value1==='bigint') && typeof value1 === typeof value2) {
        return value1 + value2;
    }

    if (value1 instanceof Array && value2 instanceof Array) {
        return value1.concat(value2);
    }

    if (value1 instanceof Object && value2 instanceof Object) {
        return {...value1, ...value2};
    }

    throw new Error('Addition is not possible for the provided types.');
}

function stringifyValue(value){

    if(value instanceof Object || value instanceof Array){
        return JSON.stringify(value);
        
    }else{
        return value.toString();
    }
}

function invertBoolean(value){
    if(typeof value === 'boolean'){
        return !value;
    }else{
        throw new Error('The provided type is not a boolean.');
    }
}

function convertToNumber(value){
    if(typeof value === 'string'){
        return parseInt(value);
    }

    if(typeof value === 'number' || typeof value === 'bigint'){
        return value;
    }

    if(typeof value === 'boolean'){
        return value ? 1 : 0;

    }else{
        throw new Error('The provided type can not be converted into a number.');
    }
}

//coerceToType: Accepts two arguments: value and type. It attempts to convert the value to the specified
//type using type coercion. 
//The function should return the coerced value if successful. If the coercion is not possible,
//it should throw an error.
function coerceToType(value, type){

    if(typeof value === type){
        return value;
    }

    switch(type){
        case 'number':
            return this.convertToNumber(value);
        case 'string':
            return this.stringifyValue(value);
        case 'boolean':
            return Boolean(value);
        case 'bigint':
            return BigInt(value);
        default:
            throw new Error('The provided type is not supported.');
    }
}

try{

    let a = [1, 2, 3, 4, 5];
    let b = [6, 7, 8, 9, 10];
    
    console.log(addValues(a, b)); 

    let value = true;
    console.log(invertBoolean(value));

    console.log(convertToNumber('1234'));

    console.log(coerceToType(a, 'boolean'));
    
} catch (error) {
    console.log(error.message);
}

let a = true;
console.log(stringifyValue(a));



