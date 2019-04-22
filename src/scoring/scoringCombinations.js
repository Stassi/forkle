import {
  curry,
  divide,
  map,
  pipe,
  propOr,
} from 'ramda';
import histogram from '../histogram';

const propOrZero = propOr(0);
const propOrZeroDivisor = pipe(propOrZero, divide);
const curriedPropOrZeroDivisor = curry(propOrZeroDivisor);

const toScoringCombinations = histogramOfRolled => pipe(
  ({ face, ...props }) => ({
    ...props,
    face,
    occurrences: curriedPropOrZeroDivisor(face),
  }),
  ({ occurrences, ...props }) => ({
    ...props,
    divideByOccurrences: occurrences(histogramOfRolled),
  }),
  ({
    divideByOccurrences,
    kind,
    ...props
   }) => ({
    ...props,
    kind,
    totalScoringCombinations: divideByOccurrences(kind),
  }),
  ({ totalScoringCombinations, ...props }) => ({
    ...props,
    totalScoringCombinations,
    completeScoringCombinations: Math.floor(totalScoringCombinations),
  }),
);

const mapToScoringCombinations = pipe(
  histogram,
  toScoringCombinations,
  map,
);

const scoringCombinations = pipe(
  ({ rolled, ...props }) => ({
    ...props,
    analyzeRolled: mapToScoringCombinations(rolled),
  }),
  ({ analyzeRolled, scoring }) => analyzeRolled(scoring),
);

export default scoringCombinations;
