var endOfMonth = require('../end_of_month');

describe('endOfMonth', function() {
  it('returns date with time setted to 23:59:59.999 and date setted to first day in month', function() {
    var date = new Date('2014-09-02T11:55:00');
    var result = endOfMonth(date);
    expect(result).to.be.eql(
      new Date(2014, 8 /* Sep */, 30, 23, 59, 59, 999)
    );
  });

  it('accepts string', function() {
    var date = '2014-09-02T11:55:00';
    var result = endOfMonth(date);
    expect(result).to.be.eql(
      new Date(2014, 8 /* Sep */, 30, 23, 59, 59, 999)
    );
  });

  it('do not mutates original date', function() {
    var date = new Date('2014-09-02T11:55:00');
    endOfMonth(date);
    expect(date).to.be.eql(new Date('2014-09-02T11:55:00'));
  });

  describe('edge cases', function() {
    it('works for last month in year', function() {
      var date = '2014-12-01T10:00:00';
      var result = endOfMonth(date);
      expect(result).to.be.eql(
        new Date(2014, 11 /* Dec */, 31, 23, 59, 59, 999)
      );
    });

    it('works for last day of month', function() {
      var date = new Date(2014, 9 /* Oct */, 31);
      var result = endOfMonth(date);
      expect(result).to.be.eql(
        new Date(2014, 9 /* Sep */, 31, 23, 59, 59, 999)
      );
    });
  });
});
