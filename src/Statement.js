function Statement(account) {
  this.account = account;
}

Statement.prototype = {
  print() {
    var statement = "date || credit || debit || balance\n";

    for(var i = this.getAccountTransactions().length; i > 0; i--) {
      statement += this.formatTransaction(this.getAccountTransactions()[i - 1]) + "\n";
    }

    return statement.slice(0, -1);
  },

  formatTransaction(transaction) {
    if (transaction["amount"] > 0) {
      return `${transaction["date"].toLocaleDateString()} || ${transaction["amount"].toFixed(2)} || || ${transaction["balance"].toFixed(2)}`
    }
    if (transaction["amount"] < 0) {
      return `${transaction["date"].toLocaleDateString()} || || ${(transaction["amount"] * -1).toFixed(2)} || ${transaction["balance"].toFixed(2)}`
    }
  },

  getAccountTransactions() {
    return this.account.getTransactions();
  }
}
