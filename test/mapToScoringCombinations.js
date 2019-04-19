import { describe, it } from 'mocha';
import { expect } from 'chai';
import scoringCombinations from './scoringCombinations';
import { mapToScoringCombinations } from '../src'
import standardScoring from '../src/scoring/standard';

describe('#mapToScoringCombinations', () => {
  const { rolled, withScoringCombinations } = scoringCombinations;

  it('should include each scoring combination', () => {
    expect(mapToScoringCombinations({
      rolled,
      scoring: standardScoring,
    })).to.have.deep.members(withScoringCombinations);
  });
});
