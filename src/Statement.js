function Statement(account) {
  this.account = account;
}

Statement.prototype = {
  print: function() {
    var statement = "date || credit || debit || balance\n";

    for(var i = 0; i < this.getAccountTransations().length; i++) {
      statement += this.formatTransaction(this.getAccountTransations()[i]);
    }

    return statement;
  },

  formatTransaction: function(transaction) {
    return `${transaction[1].toLocaleDateString()} || ${transaction[0].toFixed(2)} || || ${this.account.getBalance().toFixed(2)}`
  },

  getAccountTransations: function() {
    return this.account.getTransations();
  }
}
