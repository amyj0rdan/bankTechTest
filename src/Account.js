function Account() {
  this.transations = [];
  this.balance = 0;
}

Account.prototype = {
  deposit(amount, date = new Date()) {
    this.balance += amount;
    this.transations.push({
      amount: amount,
      date: date,
      balance: this.getBalance()
    });
  },

  withdraw(amount, date = new Date()) {
    this.balance -= amount;
    this.transations.push({
      amount: -amount,
      date: date,
      balance: this.getBalance()
    });
  },

  getTransactions() {
    return this.transations;
  },

  getBalance() {
    return this.balance;
  }

}

if ( typeof module !== 'undefined' && module.hasOwnProperty('exports') )
  {
    module.exports = Account;
  }
