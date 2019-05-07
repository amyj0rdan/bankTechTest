describe("Account", function() {
  var account;

  beforeEach(function() {
    account = new Account;
  });

  it('has a method #deposit', function() {
    expect(account.deposit).toBeDefined();
  });
});
