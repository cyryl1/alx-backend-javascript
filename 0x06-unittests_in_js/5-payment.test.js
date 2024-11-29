const sendPaymentRequestToApi = require('./3-payment');
const sinon = require('sinon');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', function () {
    let consoleSpy;

    beforeEach(function () {
        consoleSpy = sinon.spy(console, 'log');
    });

    afterEach(function () {
        consoleSpy.restore();
    });

    it('should call sendPaymentRequestApi with arguments 100, 20', function () {
        sendPaymentRequestToApi(100, 20);
        expect(consoleSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
    });

    it('should call sendPaymentRequestApi with arguments 10, 10', function () {
        sendPaymentRequestToApi(10, 10);

        expect(consoleSpy.calledOnceWithExactly('The total is: 20')).to.be.true;

    });
});
