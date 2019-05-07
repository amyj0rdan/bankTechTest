function Account() {
  this.transations = []
}

Account.prototype = {
  deposit: function(amount, date) {
    this.transations.push([amount, date]);
  },

  getTransactions: function() {
    return this.transations;
  }
}
