import {
  filter,
  lte,
  pipe,
  prop,
} from 'ramda';

const scoringCombinationsProp = prop('scoringCombinations');
const greaterOrEqualToOne = lte(1);
const validScoringCombination = pipe(scoringCombinationsProp, greaterOrEqualToOne);
const filterValidScoringCombinations = filter(validScoringCombination);

export default filterValidScoringCombinations;
