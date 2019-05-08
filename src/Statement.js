function Statement(account) {
  this.account = account;
}

Statement.prototype = {
  print() {
    var statement = 'date || credit || debit || balance\n';

    for(var i = this.getAccountTransactions().length; i > 0; i--) {
      statement += this.formatTransaction(this.getAccountTransactions()[i - 1]) + '\n';
    }

    return statement.slice(0, -1);
  },

  formatTransaction(transaction) {
    if (transaction['amount'] > 0) {
      return `${this.formatDate(transaction['date'])} || ${transaction['amount'].toFixed(2)} || || ${transaction['balance'].toFixed(2)}`
    }
    if (transaction['amount'] < 0) {
      return `${this.formatDate(transaction['date'])} || || ${(transaction['amount'] * -1).toFixed(2)} || ${transaction['balance'].toFixed(2)}`
    }
  },

  formatDate(date) {
    return ('0' + date.getDate()).slice(-2) + '/'
      + ('0' + (date.getMonth()+1)).slice(-2) + '/'
      + date.getFullYear();
  },

  getAccountTransactions() {
    return this.account.getTransactions();
  }
}

if ( typeof module !== 'undefined' && module.hasOwnProperty('exports') )
  {
    module.exports = Statement;
  }
