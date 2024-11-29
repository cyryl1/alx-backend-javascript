const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect } = require('chai');

describe('getPaymentTokenFromAPI', function () {
    it('should return a resolved promise with the correct data when success is true', function (done) {
        getPaymentTokenFromAPI(true).then((response) => {
            expect(response).to.eql({ data: 'Successful response from the API' });
            done();
        }).catch((err) => done(err));
    });

    it('should resolve with undefined when success is false', function (done) {
        const result = getPaymentTokenFromAPI(false);
        
        expect(result).to.be.undefined;
        done();

        // setTimeout(() => {
        //     result.then((response) => {
        //       // The promise should resolve with undefined when success is false
        //       expect(response).to.be.undefined;
        //       done();
        //     }).catch(done);
        // }, 100);
    });
});
