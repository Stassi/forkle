import { describe, it } from 'mocha';
import { expect } from 'chai';
import { debug } from '../src'

// TODO: Remove
describe('debug', () => {
  it('should have tests', () => {
    expect(debug()).to.equal('debug2');
  });
});
