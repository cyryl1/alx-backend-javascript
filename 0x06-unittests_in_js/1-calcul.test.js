const calculateNumber = require('./1-calcul');
const assert = require('assert');

describe('calculateNumber', () => {
    it('should add two whole numbers correctly', () => {
        assert.strictEqual(calculateNumber('SUM', 1, 3), 4)
    });

    it('should subtract two whole numbers correctly', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), 2)
    });

    it('should divide two whole numbers correctly', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 4, 2), 2)
    });

    it('should round down decimal numbers less than .5', () => {
        assert.strictEqual(calculateNumber('SUM', 1.2, 3.3), 4);
    });

    it('should round up decimal numbers .5 and above', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.7, 3.7), 2);
    });

    it('should handle zero correctly', () => {
        assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
    });

    it('should handle negative numbers correctly', () => {
        assert.strictEqual(calculateNumber('SUM', -1, -3), -4);
    });

    it('should round .5 up', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1.5, 3.5), 0.5);
    });
    
    it('should round first number up and second number down', () => {
        assert.strictEqual(calculateNumber('SUM', 1.7, 3.3), 5);
    });

    it('should round the first number down and second number up', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.3, 3.7), 3);
    });

})
