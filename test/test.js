import { assert } from 'chai';
import { multiply } from '../multiply.js';



describe('Testing multiplication function', () => {
  it('should return 1', () => {
        assert.equal(multiply(1, 1), 1);
    });
  });
