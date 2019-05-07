describe("Statement", function() {
  var statement;

  var account = {
    getTransations: function() {},
    getBalance: function() {},
}
  beforeEach(function() {
    statement = new Statement(account);
  })

  describe('#print', function() {
    it('has a method print', function(){
      expect(statement.print).toBeDefined()
    })
  })
})
