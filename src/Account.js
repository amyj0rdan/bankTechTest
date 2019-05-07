function Account() {
  this.transations = []
  this.balance = 0
}

Account.prototype = {
  deposit: function(amount, date) {
    this.transations.push([amount, date]);
    this.balance += amount;
  },

  withdraw: function(amount, date) {
    this.transations.push([-amount, date])
    this.balance -= amount
  },

  getTransactions: function() {
    return this.transations;
  },

  getBalance: function() {
    return this.balance;
  }

}
