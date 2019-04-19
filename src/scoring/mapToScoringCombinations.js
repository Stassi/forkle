import {
  divide,
  map,
  pipe,
  propOr,
} from 'ramda';
import histogram from '../histogram';

const propOrZero = propOr(0);
const scoringCombinations = pipe(propOrZero, divide);

// TODO: Simplify
const mapToScoringCombinations = ({ rolled, scoring }) => map(
  ({ face, kind, ...props }) => ({
    ...props,
    face,
    kind,
    scoringCombinations: scoringCombinations(
      face,
      histogram(rolled),
    )(kind),
  }),
  scoring,
);

export default mapToScoringCombinations;
