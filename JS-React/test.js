class Accout{
    constructor(){
        this._balance = 0,
        this._transaction = []
    }

    deposite(amount){
        this._processDeposite(amount);
        this._balance += amount;
    }

    _processDeposite(amount){
        this._transaction.push({
            type: "deposite",
            amount : amount
        })
    }

    withdraw(amount){
       if(amount > this._balance){
            alert(`Balance is insufficient`);
            return;
        }
        this._processWithdraw(amount);
        return this._balance -= amount;
    }

    _processWithdraw(amount){
        this._transaction.push({
            type: 'Withdraw',
            amount
        })
    }

    /* transactions(type, amount){
        let historyTransaction = {
            deposit: amount,
            type: type
        }

        return this._transaction.push(historyTransaction);
    } */

    get balance(){
        return this._balance
    }

    get transaction(){
        return this._transaction;
    }
}

let person1Account = new Accout();
person1Account.deposite(500);
person1Account.withdraw(50);
console.log(person1Account.balance);
console.log('History of Transactions');
console.log(person1Account.transaction);
