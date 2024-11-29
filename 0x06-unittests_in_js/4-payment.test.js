const sendPaymentRequestToApi = require('./3-payment');
const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', function () {
    let consoleSpy;
    it('should call Utils.calculateNumber with correct arguments', function () {
        const spy = sinon.spy(Utils, 'calculateNumber');

        sendPaymentRequestToApi(100, 20);

        expect(spy.calledOnce).to.be.true;
        expect(spy.calledWithExactly('SUM', 100, 20)).to.be.true;

        spy.restore();
    });

    it('should stub Utils.calculateNumber to always return 10', () => {
        consoleSpy = sinon.spy(console, 'log');

        const stub = sinon.stub(Utils, 'calculateNumber').returns(10);

        sendPaymentRequestToApi(100, 20);

        // expect(stub.calledOnce).to.be.true;
        expect(stub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

        expect(consoleSpy.calledOnceWithExactly('The total is: 10')).to.be.true;

        consoleSpy.restore();
        stub.restore();
    });
});
