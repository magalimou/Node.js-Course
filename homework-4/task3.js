/*Task 3: Object Property Getters and Setters*/
let bankAccount = {
    _balance: 1000,

    get formattedBalance() {
        return `$${this._balance}`;
    },

    set newBalance(amount) {
        this._balance = amount;
    },

    /*. The method should transfer the specified amount from the current account to the target account. Ensure that the balance and formattedBalance properties of both accounts are updated correctly.*/
    transfer(obj, amount) {
        if(this._balance < amount){
            console.log("Insufficient balance");
        }
        else{
            this._balance -= amount;
            obj._balance += amount;
        }
    }


};

console.log(bankAccount.formattedBalance); 

bankAccount.newBalance = 5000;
console.log(bankAccount.formattedBalance);

let myAccount = Object.create(bankAccount);
myAccount.newBalance = 3000;

myAccount.transfer(bankAccount, 500);
console.log(bankAccount.formattedBalance);
console.log(myAccount.formattedBalance);
