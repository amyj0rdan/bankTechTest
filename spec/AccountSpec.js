describe("Account", function() {
  var account;

  beforeEach(function() {
    account = new Account;
  });

  describe("#deposit", function() {
    it('can accept deposit amount and date', function() {
      account.deposit(1000, "10-01-2012")
      expect(account.getTransactions()).toEqual([[1000, "10-01-2012"]])
    });

    it('can accept two deposits', function() {
      account.deposit(1000, "10-01-2012")
      account.deposit(2000, "13-01-2012")
      expect(account.getTransactions()).toEqual([[1000, "10-01-2012"], [2000, "13-01-2012"]])
    });

    it('updates account balance with deposit', function() {
      account.deposit(1000, "10-01-2012")
      expect(account.getBalance()).toEqual(1000)
    });

    it('updates account balance with two deposit', function() {
      account.deposit(1000, "10-01-2012")
      account.deposit(2000, "13-01-2012")
      expect(account.getBalance()).toEqual(3000)
    });
  });

  describe('#withdraw', function() {
    it('can accept deposit amount and date', function() {
      account.deposit(1000, "10-01-2012")
      account.withdraw(500, "14-01-2012")
      expect(account.getTransactions()).toEqual([[1000, "10-01-2012"], [-500, "14-01-2012"]])
    });
  })
});
