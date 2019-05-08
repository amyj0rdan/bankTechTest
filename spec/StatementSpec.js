describe("Statement", function() {
  var statement;

  var accountDeposit = {
    getTransactions: function() {
      return [{amount: 500, date: new Date("2019 05 07"), balance: 500}]
    },
    getBalance: function() {
      return 500;
    },
  }

  var accountMultiple = {
    getTransactions: function() {
      return [{amount: 500, date: new Date("2019 05 07"), balance: 500}, {amount: -100, date: new Date("2019 05 09"), balance: 400}]
    },
    getBalance: function() {
      return 400;
    },
  }

  describe('#print for one transaction', function() {

    beforeEach(function() {
      statement = new Statement(accountDeposit);
    })

    it('returns formatted statement', function(){
      expect(statement.print()).toEqual("date || credit || debit || balance\n07/05/2019 || 500.00 || || 500.00")
    })
  })

  describe('#print for multiple transactions', function() {
    beforeEach(function() {
      statement = new Statement(accountMultiple);
    })

    it('returns formatted statement', function() {
      expect(statement.print()).toEqual("date || credit || debit || balance\n09/05/2019 || || 100.00 || 400.00\n07/05/2019 || 500.00 || || 500.00")
    })
  })
})
