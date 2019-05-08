var Account = require('../src/Account.js')

describe('Account', function() {
  var account;

  beforeEach(function() {
    account = new Account()
  });

  describe('#deposit', function() {
    it('can accept deposit amount and date', function() {
      account.deposit(1000, '10-01-2012')

      expect(account.getTransactions()).toEqual([{amount: 1000, date: '10-01-2012', balance: 1000}])
    });

    it('can accept two deposits', function() {
      account.deposit(1000, '10-01-2012')
      account.deposit(2000, '13-01-2012')

      expect(account.getTransactions()).toEqual([{amount: 1000, date: '10-01-2012', balance: 1000}, {amount: 2000, date: '13-01-2012', balance: 3000}])
    });

    it('updates account balance with deposit', function() {
      account.deposit(1000, '10-01-2012')

      expect(account.getBalance()).toEqual(1000)
    });

    it('updates account balance with two deposit', function() {
      account.deposit(1000, '10-01-2012')
      account.deposit(2000, '13-01-2012')

      expect(account.getBalance()).toEqual(3000)
    });
  });

  describe('#withdraw', function() {
    it('can accept withdrawal amount and date', function() {
      account.deposit(1000, '10-01-2012')
      account.withdraw(500, '14-01-2012')

      expect(account.getTransactions()).toEqual([{amount: 1000, date: '10-01-2012', balance: 1000}, {amount: -500, date: '14-01-2012', balance: 500}])
    });

    it('can accept two withdrawals', function() {
      account.deposit(1000, '10-01-2012')
      account.withdraw(500, '14-01-2012')
      account.withdraw(100, '15-01-2012')

      expect(account.getTransactions()).toEqual([{amount: 1000, date: '10-01-2012', balance: 1000}, {amount: -500, date: '14-01-2012', balance: 500}, {amount: -100, date: '15-01-2012', balance: 400}])
    });

    it('updates balance on withdrawal', function() {
      account.deposit(1000, '10-01-2012')
      account.withdraw(500, '14-01-2012')

      expect(account.getBalance()).toEqual(500)
    });

    it('updates balance on two withdrawals', function() {
      account.deposit(1000, '10-01-2012')
      account.withdraw(500, '14-01-2012')
      account.withdraw(100, '15-01-2012')

      expect(account.getBalance()).toEqual(400)
    });
  })
});
