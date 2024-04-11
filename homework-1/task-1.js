function plus(string1, string2){
    let result = '';
    let carry = 0;
    let i = string1.length - 1;
    let j = string2.length - 1;

    while (i >= 0 || j >= 0 || carry) {
        const digit1 = i >= 0 ? parseInt(string1[i]) : 0;
        const digit2 = j >= 0 ? parseInt(string2[j]) : 0;
        const sum = digit1 + digit2 + carry;
        result = (sum % 10) + result;
        carry = sum >= 10 ? 1 : 0;
        i--;
        j--;
    }
    return result;
}

function minus(string1, string2) {
    let result = '';
    let borrow = 0;
    let i = string1.length - 1;
    let j = string2.length - 1;

    if (string1.length < string2.length || (string1.length === string2.length && string1 < string2)) {
        return "Error: string1 must be greater than or equal to string2";
    }

    while (i >= 0) {
        const digit1 = parseInt(string1[i]);
        const digit2 = j >= 0 ? parseInt(string2[j]) : 0;
        let diff = digit1 - digit2 - borrow;
        if (diff < 0) {
            diff += 10;
            borrow = 1;
        } else {
            borrow = 0;
        }
        result = diff + result;
        i--;
        j--;
    }

    if (result.replace(/^0+/, '') === '') {
        return '0';
    }else
    {
        return result.replace(/^0+/, '');
    }
 
}

function divide(dividend, divisor) {
    let result = '';
    let remainder = 0;

    for (let i = 0; i < dividend.length; i++) {
        const digit = parseInt(dividend[i]);
        const partialDividend = remainder * 10 + digit;
        const partialResult = Math.floor(partialDividend / divisor);
        remainder = partialDividend % divisor;
        result += partialResult;
    }

    return result.replace(/^0+/, '') || '0'; 
}

function multiply(string1, string2) {
    const num1 = string1.split('').reverse();
    const num2 = string2.split('').reverse();
    const result = [];

    for (let i = 0; i < num1.length; i++) {
        for (let j = 0; j < num2.length; j++) {
            const product = num1[i] * num2[j];
            result[i + j] = (result[i + j] || 0) + product;
            if (result[i + j] >= 10) {
                result[i + j + 1] = (result[i + j + 1] || 0) + Math.floor(result[i + j] / 10);
                result[i + j] %= 10;
            }
        }
    }
    return result.reverse().join('').replace(/^0*(\d)/, '$1') || '0';
}


let a = '22222222222222222222222200000000000000';
let b = '3000';
console.log(`The result of ${a} + ${b} is ${plus(a, b)}`);
console.log(`The result of ${a} - ${b} is ${minus(a, b)}`);
console.log(`The result of ${a} % ${b} is ${divide(a, b)}`);
console.log(`The result of ${a} x ${b} is ${multiply(a, b)}`);
