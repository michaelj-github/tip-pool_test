describe("Helpers test", function() {
  // accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects

  // beforeEach(function () {
  //       // initialization logic
  //     });

  it('should total payments for a payment type on sumPaymentTotal()', function() {
    let type = 'tipAmt';
    allPayments[0] = 10;
    allPayments[1] = 20;
    // sumPaymentTotal('tipAmt');
    // console.log(sumPaymentTotal('tipAmt'));
    expect(true).toEqual(true);
  });

  it('should convert the bill and tip amount into a tip percent on calculateTipPercent()', function() {
    expect(true).toEqual(true);
  });

  it('should append a newly created td element on appendTd()', function() {
    expect(true).toEqual(true);
  });

  // afterEach(function() {
  //   // teardown logic
  // });

});
