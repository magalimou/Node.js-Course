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

        if(isNaN(value)){
            throw new Error('The provided string can not be converted into a number.');
        }

        if(value === ''){
            return 0;
        }
       
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

function coerceToType(value, type){

    if(typeof value === type){
        return value;
    }

    switch(type){
        case 'number':
            return convertToNumber(value);
        case 'string':
            return stringifyValue(value);
        case 'boolean':
            return Boolean(value);
        case 'bigint':
            return BigInt(value);
        default:
            throw new Error('The provided value cannot be converted into the specified type.');
    }
}

try{

    let a = [1, 2, 3, 4, 5];
    let b = [6, 7, 8, 9, 10];
    
    console.log(addValues(a, b)); 

    console.log(stringifyValue(a));

    console.log(invertBoolean(true));

    console.log(convertToNumber(''));

    console.log(coerceToType(5, 'string'));
    
} catch (error){
    
    console.log(error.message);
}






