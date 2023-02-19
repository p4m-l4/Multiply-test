import { assert } from 'chai';
import { multiply } from '../multiply.js';



describe('Testing multiplication function', () => {
  it('should return 1', () => {
        assert.equal(multiply(1, 1), 1);
    });

    it('Testing 2 by 2 to return 4', () => {
        assert.equal(multiply(2, 2), 4);
    });
  });