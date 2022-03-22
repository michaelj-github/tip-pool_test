describe("Payments test", function() {

  beforeEach(function () {
    // initialization logic
    billAmtInput.value = 100;
    tipAmtInput.value = 20;
    paymentId = 0;
    allPayments = {};
      });

  it('should add a curPayment object to allPayments, update html and reset input values on submitPaymentInfo()', function() {
      submitPaymentInfo();
      expect(Object.keys(allPayments).length).toEqual(1);
      expect(allPayments['payment1'].tipPercent).toEqual(20);
  });

  it('should not add a payment on submitPaymentInfo() when bill amount or tip amount are blank', function() {
    billAmtInput.value = "";
      submitPaymentInfo();
      expect(Object.keys(allPayments).length).toEqual(0);
      tipAmtInput.value = "";
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(0);
  });

  it('should not add a payment on submitPaymentInfo() when bill amount = 0', function() {
    billAmtInput.value = 0;
      submitPaymentInfo();
      expect(Object.keys(allPayments).length).toEqual(0);
  });

  it('should return billAmt, tipAmt, tipPercent on createCurPayment()', function() {
    expect(createCurPayment()).toEqual({billAmt: '100', tipAmt: '20', tipPercent: 20});
  });

  it('should Create table row element and pass to appendTd with input value on appendPaymentTable()', function() {
    let curPayment = createCurPayment();
    paymentId = 1;
    allPayments['payment' + paymentId] = curPayment;
    appendPaymentTable(curPayment);
    let curTdList = document.querySelectorAll('#paymentTable tbody tr td');
    expect(curTdList.length).toEqual(3);
    expect(curTdList[2].innerText).toEqual('20%');
  });

  it('should Create table row element and pass to appendTd with calculated sum of all payment on updateSummary()', function() {
    let curPayment = createCurPayment();
    paymentId = 1;
    allPayments['payment' + paymentId] = curPayment;
    appendPaymentTable(curPayment);
    updateServerTable();
    updateSummary();
    expect(summaryTds[2].innerHTML).toEqual('20%')
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
  });

});
