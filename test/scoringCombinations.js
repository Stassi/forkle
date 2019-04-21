import { describe, it } from 'mocha';
import { expect } from 'chai';
import sampleScoringCombinations from './sampleScoringCombinations';
import standardScoring from '../src/scoring/standard';
import { scoringCombinations } from '../src';

describe('#scoringCombinations', () => {
  const { rolled, withScoringCombinations } = sampleScoringCombinations;

  it('should include each scoring combination', () => {
    expect(scoringCombinations({
      rolled,
      scoring: standardScoring,
    })).to.have.deep.members(withScoringCombinations);
  });
});
