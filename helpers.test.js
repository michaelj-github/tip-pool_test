describe("Helpers test", function() {
  // accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects

  beforeEach(function () {
        // initialization logic
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
      });

  it('should total payments for a tipAmt payment type on sumPaymentTotal()', function() {
    expect(sumPaymentTotal('tipAmt')).toEqual(20);
    billAmtInput.value = 150;
    tipAmtInput.value = 30;
    submitPaymentInfo();
    expect(sumPaymentTotal('tipAmt')).toEqual(50);
});

it('should total payments for a billAmt payment type on sumPaymentTotal()', function() {
  expect(sumPaymentTotal('billAmt')).toEqual(100);
  billAmtInput.value = 150;
  tipAmtInput.value = 30;
  submitPaymentInfo();
  expect(sumPaymentTotal('billAmt')).toEqual(250);
});

it('should total payments for a tipPercent payment type on sumPaymentTotal()', function() {
  expect(sumPaymentTotal('tipPercent')).toEqual(20);
  billAmtInput.value = 150;
  tipAmtInput.value = 30;
  submitPaymentInfo();
  expect(sumPaymentTotal('tipPercent')).toEqual(40);
  billAmtInput.value = 250;
  tipAmtInput.value = 50;
  submitPaymentInfo();
  expect(sumPaymentTotal('tipPercent')).toEqual(60);
});

it('should convert the bill and tip amount into a tip percent on calculateTipPercent()', function() {
  expect(calculateTipPercent(100, 20)).toEqual(20);
  expect(calculateTipPercent(200, 20)).toEqual(10);
  expect(calculateTipPercent(300, 90)).toEqual(30);
  });

  it('should append a newly created td element on appendTd()', function() {
    let testTr = document.createElement('tr');
    appendTd(testTr, 'testTr');
    expect(testTr.children.length).toEqual(1);
    expect(testTr.firstChild.innerHTML).toEqual('testTr');
        // expect(true).toEqual(true);
  });

  afterEach(function() {
    // teardown logic
    billAmtInput.value = '';
    tipAmtInput.value = '';
    allPayments = {};
    paymentId = 0;
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    serverTbody.innerHTML = '';
  });

});
