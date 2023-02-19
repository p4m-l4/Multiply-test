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
    
  });