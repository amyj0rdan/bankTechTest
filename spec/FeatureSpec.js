describe('Feature Test', function() {
  beforeEach(function() {
    account = new Account();
  })

  it('can accept deposits and withdrawals and print a statement', function() {
    account.deposit(1000, new Date("2012 01 10"))
    account.deposit(2000, new Date("2012 01 13"))
    account.withdraw(500, new Date("2012 01 14"))
    var statement = new Statement(account)
    
    expect(statement.print()).toEqual("date || credit || debit || balance\n14/01/2012 || || 500.00 || 2500.00\n13/01/2012 || 2000.00 || || 3000.00\n10/01/2012 || 1000.00 || || 1000.00")
  })

})
