const calculateNumber = require('./0-calcul');
const assert = require('assert');

describe('calculateNumber', () => {
    it('should add two whole numbers correctly', () => {
        assert.strictEqual(calculateNumber(1, 3), 4)
    });

    it('should round down decimal numbers less than .5', () => {
        assert.strictEqual(calculateNumber(1.2, 3.3), 4);
    });

    it('should round up decimal numbers .5 and above', () => {
        assert.strictEqual(calculateNumber(1.7, 3.7), 6);
    });

    it('should handle zero correctly', () => {
        assert.strictEqual(calculateNumber(0, 0), 0);
    });

    it('should handle negative numbers correctly', () => {
        assert.strictEqual(calculateNumber(-1, -3), -4);
    });

    it('should round .5 up', () => {
        assert.strictEqual(calculateNumber(1.5, 3.5), 6);
    });
    
    it('should round first number up and second number down', () => {
        assert.strictEqual(calculateNumber(1.7, 3.3), 5);
    });

    it('should round the first number down and second number up', () => {
        assert.strictEqual(calculateNumber(1.3, 3.7), 5);
    });

})
