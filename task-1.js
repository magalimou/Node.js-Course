function plus(string1, string2){
    let result = '';
    let carry = 0;

    while(string1.length > 0 && string2.length ){
        let sum = parseInt(string1[string1.length - 1]) + parseInt(string2[string2.length - 1]) + carry;

        if(sum > 9){
            carry = 1;
            sum = sum - 10;
        }else{
            carry = 0;
        }

        result = sum + result;
        string1 = string1.slice(0, -1);
        string2 = string2.slice(0, -1);
    }

    if(carry > 0){
        result = carry + result;
    }

    return result;
}

let string1 = '9999999999999999';
let string2 = '22555589954654215';
console.log(plus(string1, string2));