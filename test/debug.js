import { describe, it } from 'mocha';
import { expect } from 'chai';
import { forkle as debug } from '../src'

describe('debug', () => {
  it('should have tests', () => {
    expect(debug()).to.equal('debug2');
  });
});
