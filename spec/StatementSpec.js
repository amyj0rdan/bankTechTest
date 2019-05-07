describe("Statement", function() {
  var statement;

  var account = {
    getTransations: function() {
      return [[500, new Date(2019, 4, 7)]]
    },
    getBalance: function() {
      return 500;
    },
}
  beforeEach(function() {
    statement = new Statement(account);
  })

  describe('#print', function() {
    it('has a method print', function(){
      expect(statement.print()).toEqual("date || credit || debit || balance\n07/05/2019 || 500.00 || || 500.00")
    })
  })
})
