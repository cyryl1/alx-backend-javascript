const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
    it('should add two whole numbers correctly', () => {
        expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });

    it('should subtract two whole numbers correctly', () => {
        expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(2);
    });

    it('should divide two whole numbers correctly', () => {
        expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2);
    });

    it('should round down decimal numbers less than .5', () => {
        expect(calculateNumber('SUM', 1.2, 3.3)).to.equal(4);
    });

    it('should round up decimal numbers .5 and above', () => {
        expect(calculateNumber('SUBTRACT', 1.7, 3.7)).to.equal(2);
    });

    it('should handle zero correctly', () => {
        expect(calculateNumber('SUM', 0, 0)).to.equal(0);
    });

    it('should handle negative numbers correctly', () => {
        expect(calculateNumber('SUM', -1, -3)).to.equal(-4);
    });

    it('should round .5 up', () => {
        expect(calculateNumber('DIVIDE', 1.5, 3.5)).to.equal(0.5);
    });
    
    it('should round first number up and second number down', () => {
        expect(calculateNumber('SUM', 1.7, 3.3)).to.equal(5);
    });

    it('should round the first number down and second number up', () => {
        expect(calculateNumber('SUBTRACT', 1.3, 3.7)).to.equal(3);
    });

})
