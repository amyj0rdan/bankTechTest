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
  });
});
