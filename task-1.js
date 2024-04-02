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
    let result = '0';
    
    for (let i = string2; i > 0; i--) {
        result = plus(result, string1);
    }

    return result;
}

let a = '456';
let b = '456';
console.log(`The result of ${a} + ${b} is ${plus(a, b)}`);
console.log(`The result of ${a} - ${b} is ${minus(a, b)}`);
console.log(`The result of ${a} % ${b} is ${divide(a, b)}`);
console.log(`The result of ${a} x ${b} is ${multiply(a, b)}`);
