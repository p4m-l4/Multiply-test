import { assert } from 'chai';
import { multiply } from '../multiply.js';

describe('Testing multiplication function', () => {
  it('should return 1', () => {
        assert.equal(multiply(1, 1), 1);
    });

    it('Testing 2 by 2 to return 4', () => {
        assert.equal(multiply(2, 2), 4);
    });

    it('Testing 3x3 to return 9', () => {
        assert.equal(multiply(3, 3), 9);
    });

    it('Testing 4x4 to return 16', () => {
        assert.equal(multiply(4, 4), 16);
    });

    it('Testing 23x45 to return 23*45', () => {
        assert.equal(multiply(23, 45), 23 * 45);
    });

    it('Testing -23x45 to return 23*45', () => {
        assert.equal(multiply(-23, 45), -23 * 45);
    });
    it('Testing -23x45 to return 23*45', () => {
        assert.equal(multiply(-23, 45), -23 * 45);
    });
  });